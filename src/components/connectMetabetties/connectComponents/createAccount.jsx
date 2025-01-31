import { useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GoArrowRight } from 'react-icons/go';
import { login } from '../../../store/auth/actions';

//ICONS imports
import MetaMaskIcon from '../../../assets/metaMaskIcon.svg';
import logo from '../../../assets/logo.png';
import Coin98Icon from '../../../assets/coin98Icon.svg';
import WalletConnect from '../../../assets/walletConnectIcon.svg';
import BitkeepIcon from '../../../assets/bitkeepIcon.svg';
import CoinbaseIcon from '../../../assets/coinbaseIcon.svg';
import { OverlayLoaderContext } from '../../../contexts/overlayLoaderContext';

export const CreateAccount = () => {
  const [email, setEmail] = useState('');

  const { setLoading } = useContext(OverlayLoaderContext);

  const { loading } = useSelector(({ auth }) => auth);
  const dispatch = useDispatch();

  setLoading(loading);
  const currentYear = new Date().getFullYear();

  const handleEmail = (event) => {
    event.preventDefault();
    dispatch(login({ email, password: '123123' }));
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleEmail(event);
    }
  };

  const icons = [
    {
      name: 'MetaMask',
      walletIcon: MetaMaskIcon,
    },
    {
      name: 'Coin98',
      walletIcon: Coin98Icon,
    },
    {
      name: 'WalletConnect',
      walletIcon: WalletConnect,
    },
    {
      name: 'CoinbaseWallet',
      walletIcon: CoinbaseIcon,
    },
    {
      name: 'Bitkeep',
      walletIcon: BitkeepIcon,
    },
    {
      name: 'Coin98',
      walletIcon: Coin98Icon,
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center">
        <img src={logo} width={100} className="mb-2" alt="" />
        <p className="text-[25.01px] my-3" style={{ lineHeight: '35.73px', fontWeight: 600 }}>
          Connect to MetaBetties
        </p>
      </div>

      <div className="bg-gray-900 shadow-xl rounded-3xl p-5" style={{ width: '85%' }}>
        <div>
          <div className="grid grid-cols-3 gap-4 my-5 ">
            {icons?.map((item, ind) => (
              <div key={ind} className="border bg-gray-950 flex flex-col justify-center items-center p-5 rounded-2xl">
                <span className="p-1">
                  <img src={item.walletIcon} size={27.54} alt={item.name} />
                </span>
                <p
                  className="text-center p-1 text-[12.83px]"
                  style={{ lineHeight: '22px', fontWeight: 600, fontFamily: 'Inter' }}
                >
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center my-5 ">
        <div className="flex items-center">
          <div className="border-t border-gray-400 lg:w-100 w-48 mr-4"></div>
          <p className="text-gray-700 font-semibold ">OR</p>
          <div className="border-t border-gray-400 lg:w-100 w-48 ml-4"></div>
        </div>
      </div>

      <div className="relative my-1" style={{ width: '85%' }}>
        <input
          type="text"
          name="email"
          placeholder="email.."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyPress={handleKeyPress}
          className="text-[14.67px] h-12 px-4 pr-12 rounded-3xl bg-gray-800"
          style={{ lineHeight: '17.75px', fontWeight: 600, width: '100%' }}
        />
        <button
          type="submit"
          onClick={handleEmail}
          disabled={loading}
          className="absolute inset-y-0 right-0 px-3 m-1 flex items-center bg-[#E0D026] rounded-3xl"
        >
          <GoArrowRight className="text-gray-600" />
        </button>
      </div>
      <div className="absolute bottom-0 w-full text-center text-sm pb-5 text-gray-500">
        All Rights Reserved {currentYear} MetaBetties
      </div>
    </>
  );
};
