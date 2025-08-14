import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { MacroResults, Language } from '../types';
import { translations } from '../data/translations';

export const generatePDF = async (results: MacroResults, language: Language) => {
  const t = translations[language];
  
  // Create a new PDF document
  const pdf = new jsPDF();
  
  // Set font for Arabic if needed
  if (language === 'ar') {
    pdf.setFont('Helvetica');
  }
  
  // Add title
  pdf.setFontSize(20);
  pdf.setTextColor(0, 0, 0);
  pdf.text(t.title, 20, 20);
  
  // Add subtitle
  pdf.setFontSize(12);
  pdf.setTextColor(100, 100, 100);
  pdf.text(t.subtitle, 20, 30);
  
  // Add results section
  pdf.setFontSize(16);
  pdf.setTextColor(0, 0, 0);
  pdf.text(t.results, 20, 50);
  
  // BMR, TDEE, Goal Calories
  pdf.setFontSize(12);
  let yPos = 65;
  
  pdf.text(`${t.bmr}: ${results.bmr} ${t.calories}`, 20, yPos);
  yPos += 10;
  pdf.text(`${t.tdee}: ${results.tdee} ${t.calories}`, 20, yPos);
  yPos += 10;
  pdf.text(`${t.goalCalories}: ${results.goalTdee} ${t.calories}`, 20, yPos);
  yPos += 20;
  
  // Macros breakdown
  pdf.setFontSize(14);
  pdf.text(t.macroBreakdown, 20, yPos);
  yPos += 15;
  
  pdf.setFontSize(12);
  pdf.text(`${t.protein}: ${results.protein.grams}g (${results.protein.calories} ${t.calories}, ${results.protein.percentage}%)`, 20, yPos);
  yPos += 10;
  pdf.text(`${t.carbs}: ${results.carbs.grams}g (${results.carbs.calories} ${t.calories}, ${results.carbs.percentage}%)`, 20, yPos);
  yPos += 10;
  pdf.text(`${t.fat}: ${results.fat.grams}g (${results.fat.calories} ${t.calories}, ${results.fat.percentage}%)`, 20, yPos);
  
  // Add footer
  pdf.setFontSize(10);
  pdf.setTextColor(150, 150, 150);
  pdf.text(t.poweredBy, 20, 280);
  
  // Save the PDF
  const filename = language === 'ar' ? 'خطة-اللياقة.pdf' : 'fitness-plan.pdf';
  pdf.save(filename);
};

export const printResults = () => {
  // Create a print-friendly version of the results
  const printWindow = window.open('', '_blank');
  if (!printWindow) return;
  
  const resultsElement = document.getElementById('results-section');
  if (!resultsElement) return;
  
  html2canvas(resultsElement, {
    scale: 2,
    useCORS: true,
    allowTaint: true,
  }).then((canvas) => {
    const imgData = canvas.toDataURL('image/png');
    
    printWindow.document.write(`
      <html>
        <head>
          <title>Fitness Plan</title>
          <style>
            body { margin: 0; padding: 20px; font-family: Arial, sans-serif; }
            img { max-width: 100%; height: auto; }
            @media print {
              body { margin: 0; }
              img { width: 100%; }
            }
          </style>
        </head>
        <body>
          <img src="${imgData}" alt="Fitness Plan Results" />
        </body>
      </html>
    `);
    
    printWindow.document.close();
    printWindow.print();
  });
};