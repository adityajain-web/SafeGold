import Website from './Images/visit website.svg';
import MPay from './Images/mpay.svg';
import Select from './Images/select.svg';
import CardPay from './Images/card payment.svg';
import Store from './Images/store.svg';
import OrderConf from './Images/order confirm.svg';
import Shop from './Images/shop.svg';
import Globe from './Images/globe.svg';

const Online = [{
    id: 1,
    imgSrc: Website,
    title: "Visit the Website",
    details: "Visit Candere website and select any jewellery of your choice!"
}, {
    id: 2,
    imgSrc: Select,
    title: "Select SafeGold",
    details: "Select SafeGold from payment method section. Enter registered mobile number and OTP for verification."

}, {
    id: 3,
    imgSrc: MPay,
    title: "Pay Remaining",
    details: "Share the amount of gold you want to trade for the jewellery and checkout by paying any remaining balance."
}]

const Offline = [{
    id: 1,
    imgSrc: Store,
    title: " Visit the Store",
    details: "Visit your nearest Caratlane store to pick out the jewellery of your choice."
}, {
    id: 2,
    imgSrc: OrderConf,
    title: "Share Registered Number",
    details: "Share your registered mobile number with the cashier at the store as well as the number of grams you’d like to utilise of your safegold balance."

}, {
    id: 3,
    imgSrc: CardPay,
    title: "Pay Remaining",
    details: "Share the amount of gold you want to trade for the jewellery and checkout by paying any remaining balance."
}]

const FeatureTabs = [{
    id: 1,
    imgSrc: Globe,
    to: "#online",
    title: "Online"
}, {
    id: 2,
    imgSrc: Shop,
    to: "#offline",
    title: "Offline"
}]

export default Online;
export { Offline, FeatureTabs };
