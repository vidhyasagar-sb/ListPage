import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import i18n from "./i18n";

import ClaimList from "./container/ClaimList/index.jsx";
import PolicyList from "./container/PolicyList/index.jsx";
import Layout from "./container/Layout/index.jsx";

function App() {
  const themeName = "theme1";
  const locale = "en";

  const [collapse, setCollapse] = useState(true);

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  const appRoutes = [
    {
      path: "/",
      component: <div></div>,
      header: true,
      sidebar: true,
    },
    {
      path: "/claim-list",
      component: <ClaimList theme={themeName} locale={locale} />,
      header: true,
      sidebar: true,
    },
    {
      path: "/policy-list",
      component: <PolicyList theme={themeName} locale={locale} />,
      header: true,
      sidebar: true,
    },
  ];

  // const { t } = useTranslation();

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route element={<ProtectedRoutes />}> */}
        {appRoutes?.map((item, i) => (
          <Route
            exact
            path={item?.path}
            key={i}
            element={
              <Layout sidebar={item.sidebar} header={item?.header}>
                {item?.component}
              </Layout>
            }
          />
        ))}
        {/* </Route> */}
        {/* <Route path={"/"} element={<Login />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
