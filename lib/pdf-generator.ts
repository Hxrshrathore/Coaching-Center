import { jsPDF } from "jspdf"
import type { QuizResults, StudentInfo } from "@/types/scholarship"

export async function generatePDF(results: QuizResults, studentInfo: StudentInfo): Promise<void> {
  // Create a new PDF document
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  })

  // Define page margins and content area
  const margin = 20
  const pageWidth = doc.internal.pageSize.getWidth()
  const pageHeight = doc.internal.pageSize.getHeight()
  const contentWidth = pageWidth - margin * 2

  // Track current Y position for dynamic content placement
  let yPos = margin

  // Add company logo
  try {
    // Load and add the logo image
    const logoWidth = 40
    const logoHeight = 20
    const logoX = (pageWidth - logoWidth) / 2

    // Add logo from public directory
    const logoData = "/logo.png"
    doc.addImage(logoData, "PNG", logoX, yPos, logoWidth, logoHeight)

    yPos += logoHeight + 5
  } catch (error) {
    console.error("Error adding logo to PDF:", error)
    // Continue without logo if there's an error
    yPos += 10
  }

  // Add header
  doc.setFontSize(22)
  doc.setTextColor(75, 85, 99) // gray-600
  doc.text("Ascent Classes", pageWidth / 2, yPos, { align: "center" })
  yPos += 10

  doc.setFontSize(16)
  doc.setTextColor(79, 70, 229) // indigo-600
  doc.text("Scholarship Cum Aptitude Test Results", pageWidth / 2, yPos, { align: "center" })
  yPos += 15

  // Add student information
  doc.setFontSize(12)
  doc.setTextColor(0, 0, 0)

  // Create a student info box
  doc.setFillColor(249, 250, 251) // gray-50
  doc.roundedRect(margin, yPos, contentWidth, 40, 3, 3, "F")

  const infoStartY = yPos + 10
  doc.text(`Name: ${studentInfo.name}`, margin + 10, infoStartY)
  doc.text(`Email: ${studentInfo.email}`, margin + 10, infoStartY + 7)
  doc.text(`Phone: ${studentInfo.phone}`, margin + 10, infoStartY + 14)
  doc.text(`Class: ${studentInfo.currentClass}`, margin + 10, infoStartY + 21)

  // Add test date on the right side
  const testDate = new Date().toLocaleDateString()
  doc.text(`Test Date: ${testDate}`, pageWidth - margin - 50, infoStartY)
  doc.text(`Academic Goal: ${studentInfo.academicGoal}`, pageWidth - margin - 50, infoStartY + 7)

  yPos += 50 // Move past the info box

  // Add overall results
  doc.setFillColor(240, 245, 255) // light blue background
  doc.roundedRect(margin, yPos, contentWidth, 30, 3, 3, "F")

  doc.setFontSize(14)
  doc.setTextColor(79, 70, 229) // indigo-600
  doc.text("Test Results", pageWidth / 2, yPos + 10, { align: "center" })

  doc.setFontSize(12)
  doc.setTextColor(0, 0, 0)
  doc.text(`Overall Score: ${results.totalScore}%`, margin + 20, yPos + 20)
  doc.text(
    `Time Taken: ${Math.floor(results.timeTaken / 60)}:${(results.timeTaken % 60).toString().padStart(2, "0")}`,
    pageWidth - margin - 70,
    yPos + 20,
  )

  yPos += 40

  // Check if we need a new page for subject performance
  if (yPos > pageHeight - 100) {
    doc.addPage()
    yPos = margin
  }

  // Add subject-wise performance
  doc.setFontSize(14)
  doc.setTextColor(79, 70, 229) // indigo-600
  doc.text("Subject Performance", pageWidth / 2, yPos, { align: "center" })
  yPos += 10

  doc.setFontSize(12)
  doc.setTextColor(0, 0, 0)

  results.subjectResults.forEach((subject) => {
    // Check if we need a new page
    if (yPos > pageHeight - 30) {
      doc.addPage()
      yPos = margin
    }

    doc.text(`${subject.subject}: ${subject.score}% (${subject.correct}/${subject.total})`, margin + 20, yPos)

    // Draw progress bar background
    doc.setFillColor(229, 231, 235) // gray-200
    doc.roundedRect(margin + 20, yPos + 3, 100, 4, 2, 2, "F")

    // Draw progress bar fill
    doc.setFillColor(79, 70, 229) // indigo-600
    const fillWidth = Math.max(4, 100 * (subject.score / 100)) // Ensure minimum visible width
    doc.roundedRect(margin + 20, yPos + 3, fillWidth, 4, 2, 2, "F")

    yPos += 15
  })

  // Add scholarship details
  yPos += 10

  // Check if we need a new page
  if (yPos > pageHeight - 60) {
    doc.addPage()
    yPos = margin
  }

  doc.setFillColor(236, 253, 245) // green-50
  doc.roundedRect(margin, yPos, contentWidth, 30, 3, 3, "F")

  doc.setFontSize(14)
  doc.setTextColor(6, 95, 70) // green-800
  doc.text("Scholarship Details", pageWidth / 2, yPos + 10, { align: "center" })

  doc.setFontSize(12)
  doc.setTextColor(4, 120, 87) // green-700
  doc.text(
    `Congratulations! You've qualified for a ${results.scholarshipPercentage}% scholarship`,
    pageWidth / 2,
    yPos + 20,
    {
      align: "center",
    },
  )
  doc.text(`on our ${results.recommendedProgram}.`, pageWidth / 2, yPos + 27, { align: "center" })

  yPos += 40

  // Check if we need a new page for performance analysis
  if (yPos > pageHeight - 100) {
    doc.addPage()
    yPos = margin
  }

  // Add strengths and weaknesses
  doc.setFontSize(14)
  doc.setTextColor(79, 70, 229) // indigo-600
  doc.text("Performance Analysis", pageWidth / 2, yPos, { align: "center" })
  yPos += 10

  doc.setFontSize(12)
  doc.setTextColor(0, 0, 0)

  // Strengths section
  doc.setFillColor(240, 249, 255) // light blue background
  doc.roundedRect(margin, yPos, contentWidth, 10 + results.strengths.length * 7, 3, 3, "F")

  yPos += 7
  doc.setFontSize(12)
  doc.setTextColor(30, 64, 175) // blue-800
  doc.text("Strengths:", margin + 10, yPos)
  yPos += 7

  results.strengths.forEach((strength) => {
    // Check if we need a new page
    if (yPos > pageHeight - 20) {
      doc.addPage()
      yPos = margin
    }

    doc.setTextColor(0, 0, 0)
    doc.text(`• ${strength}`, margin + 15, yPos)
    yPos += 7
  })

  yPos += 10

  // Check if we need a new page
  if (yPos > pageHeight - 60) {
    doc.addPage()
    yPos = margin
  }

  // Areas for improvement section
  doc.setFillColor(254, 242, 242) // light red background
  doc.roundedRect(margin, yPos, contentWidth, 10 + results.weaknesses.length * 7, 3, 3, "F")

  yPos += 7
  doc.setFontSize(12)
  doc.setTextColor(153, 27, 27) // red-800
  doc.text("Areas for Improvement:", margin + 10, yPos)
  yPos += 7

  results.weaknesses.forEach((weakness) => {
    // Check if we need a new page
    if (yPos > pageHeight - 20) {
      doc.addPage()
      yPos = margin
    }

    doc.setTextColor(0, 0, 0)
    doc.text(`• ${weakness}`, margin + 15, yPos)
    yPos += 7
  })

  // Add footer to all pages
  const pageCount = doc.getNumberOfPages()
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i)

    // Add page number
    doc.setFontSize(10)
    doc.setTextColor(156, 163, 175) // gray-400
    doc.text(`Page ${i} of ${pageCount}`, pageWidth - margin, pageHeight - 10)

    // Add footer with logo
    try {
      const footerLogoWidth = 10
      const footerLogoHeight = 5
      doc.addImage("/logo.png", "PNG", margin, pageHeight - 15, footerLogoWidth, footerLogoHeight)
    } catch (error) {
      // Continue without logo if there's an error
    }

    doc.setFontSize(10)
    doc.setTextColor(156, 163, 175) // gray-400
    doc.text("Ascent Classes - Excellence in Education", pageWidth / 2, pageHeight - 15, { align: "center" })
    doc.text(`Contact: info@ascentclasses.com | www.ascentclasses.com`, pageWidth / 2, pageHeight - 10, {
      align: "center",
    })
  }

  // Save the PDF
  doc.save(`${studentInfo.name.replace(/\s+/g, "_")}_Scholarship_Results.pdf`)
}
