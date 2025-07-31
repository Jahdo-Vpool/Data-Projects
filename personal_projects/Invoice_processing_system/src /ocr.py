### Optical Character Recognition

import os # Lets me get into files
import pdfplumber # Extracts text directly from text-based PDFs
from PIL import Image # Handles image objects created when converting PDFs to images for OCR
import pytesseract # Turns images into text using OCR
from pdf2image import convert_from_path # converts pdf pages into images that can then be fed to tesseract for ocr

### Functions

def extract_text_pdfplumber(pdf_path):
    """
    Uses pdfplumber to extract text from pdf file. Only works if text can be extracted.
    The function loops through the pdf file and extracts text from it. If no text is found on a page, a blank space is added.
    """
    text = ""
    with pdfplumber.open(pdf_path) as pdf:
        for page in pdf.pages:
            page_text = page.extract_text()
            if page_text:
                text += page_text
            else:
                text += ""
    return text.strip()


def extract_text_pytesseact(pdf_path):
    pages = convert_from_path(pdf_path)
    text = ""
    for page in pages:
        text += pytesseract.image_to_string(page)
    return text.strip()


def extract_invoice_text(pdf_path):
    """
    Incase the pdfplumber module is not returning sufficient text we will need a fall back
    """
    text = extract_text(pdf_path)
    if len(text) < 50:
        print("Initialize fall back.......")
        text = extract_text_pytesseact(pdf_path)
    return text
