import MainNavigation from '../components/MainNavigation';

const ErrorPage = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <h1>An error occurred!</h1>
        <p>Could ont find this page!</p>
      </main>
    </>
  );
};

export default ErrorPage;
