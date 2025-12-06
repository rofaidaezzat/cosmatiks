import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "../pages/Layout";
import HomePage from "../pages/Home_Page";
import { ShopPage } from "../pages/ShopPage";
import { AboutPage } from "../pages/AboutPage";
import AccountPage from "../pages/AccountPage";
import { BlogPage } from "../pages/BlogPage";
import { CartPage } from "../pages/CartPage";
import { CheckoutPage } from "../pages/CheckOutPage";

import { FAQPage } from "../pages/FAQPage";
import { OrderConfirmationPage } from "../pages/OrderConfirmationPage";
import { ProductDetailPage } from "../pages/ProductDetailPage";
import ContactUsPage from "../pages/ContactUsPage";
import WishlistPage from "../pages/WishlistPage";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="shop" element={<ShopPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="account" element={<AccountPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="contact" element={<ContactUsPage />} />
        <Route path="faq" element={<FAQPage />} />
        <Route path="orderconfirmation" element={<OrderConfirmationPage />} />
        <Route path="productdetail" element={<ProductDetailPage />} />
        <Route path="wishlist" element={<WishlistPage />} />
      </Route>
    </>
  )
);
export default router;
