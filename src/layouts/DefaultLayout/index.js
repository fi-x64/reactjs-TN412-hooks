import Header from "../../components/Header/Header";

function DefaultLayout({ children }) {
  return (
    <>
      <div>
        <Header />
        {children}
      </div>
    </>
  );
}

export default DefaultLayout;
