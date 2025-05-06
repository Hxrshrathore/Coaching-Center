import type { jsPDF } from "jspdf"

/**
 * Loads an image for use in PDF generation
 * @param src Image source URL
 * @returns Promise that resolves with the base64 data
 */
export const loadImageForPDF = (src: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.crossOrigin = "Anonymous"

    img.onload = () => {
      const canvas = document.createElement("canvas")
      canvas.width = img.width
      canvas.height = img.height

      const ctx = canvas.getContext("2d")
      if (!ctx) {
        reject(new Error("Could not get canvas context"))
        return
      }

      ctx.drawImage(img, 0, 0)

      try {
        const dataURL = canvas.toDataURL("image/png")
        resolve(dataURL)
      } catch (e) {
        reject(e)
      }
    }

    img.onerror = (e) => {
      reject(e)
    }

    img.src = src
  })
}

/**
 * Adds text to PDF with automatic wrapping
 * @param doc jsPDF document
 * @param text Text to add
 * @param x X position
 * @param y Y position
 * @param maxWidth Maximum width for text
 * @param lineHeight Line height
 * @returns New Y position after adding text
 */
export const addWrappedText = (
  doc: jsPDF,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  lineHeight: number,
): number => {
  const textLines = doc.splitTextToSize(text, maxWidth)
  doc.text(textLines, x, y)
  return y + textLines.length * lineHeight
}

/**
 * Checks if adding content would exceed page bounds and adds a new page if needed
 * @param doc jsPDF document
 * @param yPos Current Y position
 * @param contentHeight Height of content to be added
 * @param margin Page margin
 * @returns Updated Y position
 */
export const ensureContentFits = (doc: jsPDF, yPos: number, contentHeight: number, margin = 20): number => {
  const pageHeight = doc.internal.pageSize.getHeight()

  if (yPos + contentHeight > pageHeight - margin) {
    doc.addPage()
    return margin
  }

  return yPos
}
