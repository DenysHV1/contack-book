import css from './HomePage.module.css';

import DocumentTitle from '../../components/DocumentTitle';
import welcome from './welcome.png';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

const HomePage = () => {
  return (
    <>
      <DocumentTitle>Home</DocumentTitle>
      <h1 className="visuallyHidden">home page</h1>
      <div style={styles.container}>
        <img src={welcome} alt="welcome" className={css.welcome} />
      </div>
    </>
  );
};

export default HomePage;
