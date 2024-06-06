/* eslint-disable react/prop-types */
import { useFormState } from 'react-dom';

const addToCart = (_, queryData) => {
  const itemID = queryData.get('itemID');
  if (itemID === '1') {
    return 'Added to cart';
  } else {
    return "Couldn't add to cart: the item is sold out.";
  }
};

const AddToCartForm = ({ itemID, itemTitle }) => {
  const [message, formAction] = useFormState(addToCart, null);

  return (
    <form
      action={formAction}
      className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
    >
      <h2 className='text-xl font-bold mb-4'>{itemTitle}</h2>
      <input type='hidden' name='itemID' value={itemID} />
      <button
        type='submit'
        className='bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
      >
        Add to Cart
      </button>
      <div className='mt-4 text-sm text-gray-700'>{message}</div>
    </form>
  );
};

export default AddToCartForm;
