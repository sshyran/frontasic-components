// Doc Examples
import AccountDetails from './account/details';
import AccountLogin from './account/login';
import AccountOrdersHistory from './account/orders';
import AccountRegister from './account/register';
import ResetPassword from './account/reset-password';
import AccountTest from './account/test';
import Cart from './cart';
import Checkout from './checkout';
import CheckoutSuccess from './checkout-success';
import Markdown from './content/markdown';
import Spacer from './content/spacer';
import Tile from './content/tile';
import SimpleButton from './doc-examples/simple-button';
import StarWarsCharacterSearch from './doc-examples/star-wars/character-search';
import Footer from './footer';
import Header from './header';
import Newsletter from './newsletter';
import NotFound from './not-found';
import ProductDetails from './products/details';
import ProductList from './products/product-list';
import ProductSlider from './products/slider';
import Showcase from './showcase';
import Wishlist from './wishlist';

export const tastics = {
  'frontastic/ui/checkout': Checkout,
  'frontastic/ui/checkout-success': CheckoutSuccess,
  'frontastic/ui/cart': Cart,
  'frontastic/ui/footer': Footer,
  'frontastic/ui/header': Header,
  'frontastic/ui/content/tile': Tile,
  'frontastic/ui/content/spacer': Spacer,
  'frontastic/ui/content/showcase': Showcase,
  'frontastic/ui/content/markdown': Markdown,
  'frontastic/ui/content/newsletter': Newsletter,
  'frontastic/ui/products/details': ProductDetails,
  'frontastic/ui/products/product-list': ProductList,
  'frontastic/ui/products/slider': ProductSlider,
  'frontastic/ui/wishlist': Wishlist,
  'frontastic/ui/examples/simple-button': SimpleButton,
  'frontastic/ui/examples/star-wars/character-search': StarWarsCharacterSearch,
  'frontastic/ui/account/test': AccountTest,
  'frontastic/ui/account/details': AccountDetails,
  'frontastic/ui/account/login': AccountLogin,
  'frontastic/ui/account/register': AccountRegister,
  'frontastic/ui/account/orders': AccountOrdersHistory,
  'frontastic/ui/account/reset-password': ResetPassword,
  default: NotFound,
};
