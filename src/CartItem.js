import React from 'react';

class CartItem extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "Phone",
            price: 999,
            qty: 1,
            img: ''
        }
    }

    increaseQuantity = () => {
        this.setState({
            qty: this.state.qty + 1
        })
    }

    decreaseQuantity = () => {
        const { qty } = this.state;
        if (qty === 0) {
            return;
        }
        this.setState({
            qty: this.state.qty - 1
        })
    }
    render() {
        const { title, price, qty } = this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={{ fontSize: 25 }}>{title}</div>
                    <div style={{ color: '#777' }}>{price}</div>
                    <div style={{ color: '#777' }}>{qty}</div>
                    <div className="cart-item-actions">
                        {/* Button */}
                        <img
                            alt="increase"
                            className="actions-icons"
                            src="https://www.flaticon.com/svg/vstatic/svg/992/992651.svg?token=exp=1611759530~hmac=234f11148b75bde65183487c5a624c2f"
                            onClick={this.increaseQuantity}
                        />
                        <img
                            alt="decrease"
                            className="actions-icons"
                            src="https://www.flaticon.com/svg/vstatic/svg/992/992683.svg?token=exp=1611759434~hmac=9263f02c804df8dfeb028600d3cce53d"
                            onClick={this.decreaseQuantity}
                        />
                        <img
                            alt="delete"
                            className="actions-icons"
                            src="https://www.flaticon.com/svg/vstatic/svg/1345/1345823.svg?token=exp=1611759581~hmac=c09b47e1f97c634762f9bde9a6377218" />
                    </div>
                </div>

            </div>
        );
    }
}

const styles = {
    image: {
        height: 130,
        width: 130,
        borderRadius: 4,
        background: "#ccc"
    }
}
export default CartItem;    