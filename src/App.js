import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css'
import Sidebar from './Components/sidebar/sidebar'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import ScanComp from 'Components/ScanComp/ScanComp';
import AboutComp from 'Components/AboutComp';
import ContactComp from 'Components/ContactComp/ContactComp';
import SmartContractdev from 'Components/SmartContractdev/SmartContractdev';
import DappSecurityAudit from 'Components/DappSecurityAudit/DappSecurityAudit';
import DappDevComp from 'Components/DappDevComp/DappDevComp';
import SecurePadTokenComp from 'Components/SecurePadTokenComp/SecurePadTokenComp';
import TokenomicsComp from 'Components/TokenomicsComp/TokenomicsComp';
import BlogComp from 'Components/BlogComp/BlogComp';


function App() {
  return (
    <BrowserRouter>
    <Routes>
    {/* <Route exact path="/home" element={<NewHome/>} /> */}
      <Route exact path="/" element={<Sidebar page={"home"}/>} />
      <Route exact path="/token" element={<Sidebar page={"token"}/>} />
      <Route exact path="/smart-contract-scanner-solidity-shield" element={<ScanComp />} />
      <Route exact path="/about-us" element={<AboutComp />} />
      <Route exact path="/contact-us" element={<ContactComp />} />
      <Route exact path="/smart-contract-development" element={<SmartContractdev />} />
      <Route exact path="/dapp-security-audit" element={<DappSecurityAudit />} />
      <Route exact path="/dapp-development" element={<DappDevComp />} />
      <Route exact path="/token-launchpad-Securepad" element={<SecurePadTokenComp />} />
      <Route exact path="/tokenomics-design" element={<TokenomicsComp />} />
      <Route exact path="/blog" element={<BlogComp />} />
      <Route exact path="/contact" element={<Sidebar page={"contact"}/>} />
      <Route exact path="/pricing" element={<Sidebar page={"pricing"}/>} />
      <Route exact path="/contract" element={<Sidebar page={"contract"}/>} />
      <Route exact path="/search" element={<Sidebar page={"search"}/>} />
      <Route exact path="/sale" element={<Sidebar page={"sale"}/>} />
      <Route exact path="/lock" element={<Sidebar page={"lock"}/>} />
      <Route exact path="/manage" element={<Sidebar page={"manage"}/>} />
      <Route exact path="/locktoken/:TOKEN" element={<Sidebar page={"locktoken"}/>} />
      <Route exact path="/managelock/:LOCK" element={<Sidebar page={"managelock"}/>} />
      <Route exact path="/saletoken/:TOKEN" element={<Sidebar page={"saletoken"}/>} />
      <Route exact path="/editsale/:SALE" element={<Sidebar page={"editsale"}/>} />
      <Route exact path="/managesale/:SALE" element={<Sidebar page={"managesale"}/>} />
      <Route exact path="/buysale/:SALE" element={<Sidebar page={"buysale"}/>} />
      <Route exact path="/distributetoken" element={<Sidebar page={"distributetoken"}/>} />
      <Route path="*" element={<Sidebar page={"error"}/>} />

      

      
      {/* <Route exact path="/token" element={<Sidebar page={"token"}/>} />
      <Route exact path="/contact" element={<Sidebar page={"contact"}/>} />
      <Route exact path="/pricing" element={<Sidebar page={"pricing"}/>} /> */}
      <Route exact path="/wallet" element={<Sidebar page={"wallet"}/>} />
      {/* <Route exact path="/contract" element={<Sidebar page={"contract"}/>} /> */}
      {/* <Route exact path="/send" element={<Sidebar page={"send"}/>} />
      {/* <Route exact path="/search" element={<Sidebar page={"search"}/>} />
      <Route exact path="/sale" element={<Sidebar page={"sale"}/>} />
      <Route exact path="/lock" element={<Sidebar page={"lock"}/>} />
      <Route exact path="/manage" element={<Sidebar page={"manage"}/>} />
      <Route exact path="/managetoken/:TOKEN" element={<Sidebar page={"managetoken"}/>} />
      <Route exact path="/locktoken/:TOKEN" element={<Sidebar page={"locktoken"}/>} />
      <Route exact path="/managelock/:LOCK" element={<Sidebar page={"managelock"}/>} />
      <Route exact path="/saletoken/:TOKEN" element={<Sidebar page={"saletoken"}/>} />
      <Route exact path="/editsale/:SALE" element={<Sidebar page={"editsale"}/>} />
      <Route exact path="/managesale/:SALE" element={<Sidebar page={"managesale"}/>} />
      <Route exact path="/buysale/:SALE" element={<Sidebar page={"buysale"}/>} />
      <Route exact path="/distributetoken" element={<Sidebar page={"distributetoken"}/>} /> */} */
      
      <Route path="*" element={<Sidebar page={"error"}/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
