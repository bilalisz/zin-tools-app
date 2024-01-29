import { appLinks } from "@/constants/links"
import { CardType, FooterLinkType } from "@/types"

// nav links start
const navLinks=[
    {id:1,label:"Stack Video",url:"#"},
    {id:2,label:"Video Templates",url:"#"},
    {id:3,label:"Music",url:"#"},
    {id:4,label:"Sound Effects",url:"#"},
    {id:5,label:"Graphic Templates",url:appLinks.navLinkGT},
    {id:6,label:"Graphics",url:"#"},
    {id:7,label:"Presentation Templates",url:"#"},
    {id:8,label:"Photos",url:"#"},
    {id:9,label:"Fonts",url:"#"},
    {id:10,label:"Add-ons",url:"#"},
    {id:11,label:"More",url:"#"},
]

export const getNavLinks=()=>navLinks
    // nav links end

    // card data
// bookmarks
const bookmarks:CardType[]=[
    {id:1,icon:"editPDF",title:"Edit PDF",description:"Use the best online tool to edit PDFs in your browser."},
    {id:2,icon:"Crop-PDF",title:"Crop PDF",description:"Crop PDF online to as selecte aera, adjust margin size..."},
    {id:3,icon:"replace-text-pdf",title:"Replace Text",description:"The easiest way to replace text online."},
    {id:4,icon:"Rotate-PDF",title:"Rotate PDF",description:"Rotate and save your PDF pages online for file."},
]
const convertToPDF:CardType[]=[
    {id:1,icon:"word-pdf",title:"Word to PDF",description:"The best word to PDF converter online."},
    {id:2,icon:"PPT-PDF",title:"PPT to PDF",description:"Convert Powerpoint to PDF online."},
    {id:3,icon:"Excel-PDF",title:"Excel to PDF",description:"Easily convert Excel spreadsheet to PDF."},
    {id:4,icon:"jpg-pdf",title:"JPG to PDF",description:"Convert JPG, PNG, BMP, GIF and TIFF Images to PDF"},
    {id:5,icon:"Image-in-TXT",title:"TXT to PDF",description:"Convert TXT to PDF online for free."},
    // {id:6,icon:"Image-in-TXT",title:"TXT to PDF",description:"Convert TXT to PDF online for free."},
    // {id:7,icon:"Image-in-TXT",title:"TXT to PDF",description:"Convert TXT to PDF online for free."},
    // {id:8,icon:"Image-in-TXT",title:"TXT to PDF",description:"Convert TXT to PDF online for free."},
    // {id:9,icon:"Image-in-TXT",title:"TXT to PDF",description:"Convert TXT to PDF online for free."},
]
const converFromPDF:CardType[]=[
    {id:1,icon:"pdf-word",title:"PDF to Word",description:"Easily convert PDF to word document."},
    {id:2,icon:"PDF-PPT",title:"PDF to PPT",description:"Convert PDF  Powerpoint online."},
    {id:3,icon:"pdf-excel",title:"PDF to Excel",description:"Convert PDF to Excel for free by online tool."},
    {id:4,icon:"PDF-JPG",title:"PDF to JPG",description:"Convert PDF file to a set of optimized JPG, PNG, BM..."},
    {id:5,icon:"PDF-TXT",title:"PDF to TXT",description:"Convert PDF to TXT and extract text from your PDF."},
    {id:6,icon:"PDF-TXT",title:"PDF to TXT",description:"Convert PDF to TXT and extract text from your PDF."},
]

type Typed="bookmarks"|"convToPDF"|"convFromPDF"

export const getCardData=(type:Typed)=>{

    if(type==="bookmarks") return bookmarks
    if(type==="convToPDF") return convertToPDF
    if(type==="convFromPDF") return converFromPDF
   return bookmarks
}

  // card data end

//   footer links

const footerInternalLinks:FooterLinkType[]=[
    {id:1,label:"Documentaries",url:"#"},
    {id:2,label:"Themes",url:"#"},
    {id:3,label:"Chrome Casts",url:"#"},
]
const footerEnterpriseLinks:FooterLinkType[]=[
    {id:1,label:"Download Chrome Browser",url:"#"},
    {id:2,label:"Chrome Browser for Enterprise",url:"#"},
    {id:3,label:"Chrome Browser Devices",url:"#"},
    {id:4,label:"ChromeOs",url:"#"},
    {id:5,label:"Google Cloud",url:"#"},
    {id:6,label:"Google Workspace",url:"#"},
]

type footerParam="internal"|"enterprise"|string

export const getFooterLinks=()=>{
    // if(type==="internal") return footerInternalLinks;
    // if(type==="enterprise") return footerEnterpriseLinks;
    return {
        internal:footerInternalLinks,
        enterprise:footerEnterpriseLinks,
    }
}

const generalLinks=[
    {id:1, label:"Privacy Policy",url:"#"},
    {id:2, label:"Terms and conditions",url:"#"},
    {id:3, label:"Cookies Policy",url:"#"},
    {id:4, label:"About us",url:"#"},
    {id:5, label:"EULA",url:"#"},
    {id:6, label:"Contact",url:"#"},
]

export const getGeneralLinks=()=>generalLinks