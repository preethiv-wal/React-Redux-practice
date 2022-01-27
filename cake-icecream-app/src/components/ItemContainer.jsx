import { buyCake, buyIceCream } from "../redux"
import { connect } from 'react-redux';
const ItemContainer = (props) => {
    return (
        <>
            <h2>Item - {props.item} </h2>
            <div>
                <button onClick = {props.buyItem }>Buy Items</button>
            </div>
        </>
    )
}

const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.cake
        ? state.cake.numOfCakes
        : state.iceCream.numOfIceCreams
    return {
        item: itemState
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFunction = ownProps.cake
        ? () => dispatch(buyCake())
        : () => dispatch(buyIceCream())
    return {
        buyItem: dispatchFunction
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
) (ItemContainer);