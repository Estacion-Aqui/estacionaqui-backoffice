import { StylesProvider } from '@material-ui/styles';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import GlobalStyle from 'styles/global';

interface Props {
  children: React.ReactNode;
}

const AppProvider = ({ children }: Props) => {
  return (
    <StylesProvider injectFirst={true}>
      <RecoilRoot>
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </RecoilRoot>

      <GlobalStyle />
    </StylesProvider>
  );
};

export default AppProvider;
