import { Button } from '@components';
import { Layout } from '@examples/components';
import { useDisclosure } from '@hooks';
import { useState } from 'react';

const Page = () => {
  const [options, setOptions] = useState({});
  const { hide, isOpen, show } = useDisclosure();

  const applyFilterLogic = (values) => {
    setOptions(values);
    hide();
  };

  const calculateActiveFilters = (values, initialValues) => {
    return Object.keys(values).reduce((acc, key) => {
      if (values[key] !== initialValues[key]) {
        return acc + 1;
      }
      return acc;
    }, 0);
  };

  return (
    <Layout title="Filter Modal">
      <>
        <div className="prose-sm hidden lg:block">
          <p>
            This page is only available on mobile. Please toggle the mobile view in your browser's
            developer tools.
          </p>
        </div>
        <div className="lg:hidden">
          <p className="mt-2 text-sm text-gray-600">
            This is an example of a filter modal. You can add any filters you want in this modal.
          </p>
          <div className="mt-4">
            <Button className="button mini primary" onClick={show}>
              Open Filter Modal
            </Button>
          </div>
          <div className="mt-4">
            <p>
              <strong>Options:</strong>
            </p>
            <pre className="text-sm text-gray-600">{JSON.stringify(options, null, 2)}</pre>
          </div>
        </div>
      </>
    </Layout>
  );
};

export async function getStaticProps() {
  // hide page on production environments
  if (process.env.NODE_ENV === 'production') {
    return {
      notFound: true,
    };
  }

  return {
    props: {},
  };
}

export default Page;
