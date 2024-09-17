export const Product = ({ id, name, price, photo, onMove }) => {
    return (
      <div className="col-md-4 text-center mb-4">
        <img
          src={photo}
          alt={name}
          style={{ width: 200, height: 200, objectFit: 'cover' }}
          className="mb-2"
        />
    
        <h5>{name}</h5>
        <p>
          <strong>{price} USD</strong>
        </p>
        <button onClick={() => onMove(id)} className="btn btn-primary">
          Move
        </button>
      </div>
    );
  };
  