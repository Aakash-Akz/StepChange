import { HashRouter as Router, Routes, Route } from "react-router-dom";
import App from "../App";
import Index from "../components/Index";
import Form1 from "../components/Form1";
import Form2 from "../components/Form2";
import Form3 from "../components/Form3";
import Thanks from "../components/Thanks";

const RouterConfig = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Index />} />
          <Route path="/form1" element={<Form1 />} />
          <Route path="/form2" element={<Form2 />} />
          <Route path="/form3" element={<Form3 />} />
          <Route path="/thankyoupage" element={<Thanks />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default RouterConfig;
