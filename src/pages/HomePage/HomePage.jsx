import css from './HomePage.module.css';

import DocumentTitle from '../../components/DocumentTitle';
import HeaderBanner from '../../components/Banner/Banner';


const HomePage = () => {
  return (
    <>
      <DocumentTitle>Home</DocumentTitle>
      <h1 className="visuallyHidden">home page</h1>
      <div className={css.home_container}>
        <HeaderBanner/>
      </div>
    </>
  );
};

export default HomePage;
