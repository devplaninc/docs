import { useEffect } from 'react';
import { useHistory } from '@docusaurus/router';

export default function HomePage() {
  const history = useHistory();

  useEffect(() => {
    history.replace('/getting-started');
  }, [history]);

  return null;
}
