import Card from './components/Card'
const App = () => {
  const jobOpenings = [
    {
      brandLogo: "https://imgs.search.brave.com/Zzvl7vBD3N1kQELxTl2JTlAE81KWWdA1ZnkdSlmhjeQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDIv/MTY1LzgxNi9zbWFs/bC9nb29nbGUtbG9n/by10cmFuc3BhcmVu/dC1mcmVlLXBuZy5w/bmc",
      companyName: "Google",
      datePosted: "5 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$65/hr",
      location: "Bengaluru, India"
    },
    {
      brandLogo: "https://imgs.search.brave.com/uU0bbL7a8VHe8UstHE4lGkJC5FomSK8_T4mwWSKLtZ4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy82/MWZhZTJkMzk1ZTZj/YTAwMDQ3YjRmMTIu/cG5n",
      companyName: "Meta",
      datePosted: "2 weeks ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$70/hr",
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://imgs.search.brave.com/3sY6KThnZN9VQ_ktM4IutJHbw0gvn8aDKlULomfo76Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2JhLzg2/L2RkL2JhODZkZGEy/MmFjZmI5MWFmMzIx/M2I3Y2ZiYzdhYmI2/LmpwZw",
      companyName: "Amazon",
      datePosted: "3 days ago",
      post: "SDE I",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$60/hr",
      location: "Chennai, India"
    },
    {
      brandLogo: "https://imgs.search.brave.com/xE1LaMNfmBJgUkHZ5xlY-PC6SdljfmmLpm0PEw2TJzQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzE2L2Yx/L2U4LzE2ZjFlODdh/MTdiMGZhNzUzMzIy/ZjQ2ZDBiYzcxMzdj/LmpwZw",
      companyName: "Apple",
      datePosted: "1 week ago",
      post: "iOS Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$90/hr",
      location: "Cupertino, USA"
    },
    {
      brandLogo: "https://imgs.search.brave.com/u1Uqc8jkRSSmpNDivzHqVvO5f5q5XbyBCzw3_wOuW_I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzQ1LzIvbmV0Zmxp/eC1sb2dvLXBuZ19z/ZWVrbG9nby00NTE5/ODEucG5n",
      companyName: "Netflix",
      datePosted: "3 weeks ago",
      post: "Backend Engineer",
      tag1: "Remote",
      tag2: "Senior Level",
      pay: "$110/hr",
      location: "Los Gatos, USA"
    },
    {
      brandLogo: "https://imgs.search.brave.com/R_nB1PngmkcRATrLLVejmsMOiUoCyjZkvpj1936TU8c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZXBuZ2xvZ29z/LmNvbS91cGxvYWRz/L21pY3Jvc29mdC1s/b2dvLWltYWdlLTIz/LnBuZw",
      companyName: "Microsoft",
      datePosted: "4 days ago",
      post: "Cloud Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$75/hr",
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://imgs.search.brave.com/ADUFkNF_EDHQXUW8Ww_CIG1jYb6XOXSn400CQiH209Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzEwLzIvbnZpZGlh/LWxvZ28tcG5nX3Nl/ZWtsb2dvLTEwMTYw/Ny5wbmc",
      companyName: "NVIDIA",
      datePosted: "6 days ago",
      post: "AI Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$95/hr",
      location: "Pune, India"
    },
    {
      brandLogo: "https://imgs.search.brave.com/xOETYmKLzaxa7vhWpWYXoqWGUynBSyK0cjuU3aQguUE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9icmFu/ZGxvZ29zLm5ldC93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxNC8x/MC9hZG9iZS1sb2dv/LTIwMTctMzAweDMw/MC5wbmc",
      companyName: "Adobe",
      datePosted: "2 weeks ago",
      post: "Full Stack Developer",
      tag1: "Part Time",
      tag2: "Mid Level",
      pay: "$55/hr",
      location: "Noida, India"
    },
    {
      brandLogo: "https://imgs.search.brave.com/CxkQS56qeDPMuP9iYmgj8qrjQDvZ97cKOPh4PEDnBrw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzE4LzUxLzc5LzE5/LzM2MF9GXzE4NTE3/OTE5OTJfaWFZNFRr/OTlMNmpha1Y0UlI1/TVhNYWFtbXRJVGhn/QnQuanBn",
      companyName: "Uber",
      datePosted: "1 day ago",
      post: "Data Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$68/hr",
      location: "Bengaluru, India"
    },
    {
      brandLogo: "https://imgs.search.brave.com/7Pl1zf8jzZsF6OpFaTjpC9qytQeQ-UlH-j5y_AEhLXs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mYWJy/aWticmFuZHMuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy9TYWxl/c2ZvcmNlLUxvZ28t/SGlzdG9yeS0xLTg2/NHg1NDAucG5n",
      companyName: "Salesforce",
      datePosted: "10 days ago",
      post: "DevOps Engineer",
      tag1: "Remote",
      tag2: "Mid Level",
      pay: "$72/hr",
      location: "Mumbai, India"
    }
  ];
  return (
    <div className='parent'>
      {jobOpenings.map(function (e, id) {
        return <div key={id}>
          <Card company={e.companyName} post={e.post} datePosted={e.datePosted} logo={e.brandLogo} tag1={e.tag1} tag2={e.tag2} fee={e.pay} loc={e.location} />
        </div>
      })}
    </div>
  )
}

export default App
