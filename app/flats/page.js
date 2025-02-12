import Flat from "./flat";
export default function Flats({flats}) {
 
  return (<>
<div className="container max-w-6xl mx-auto   mt-9">
    <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto place-items-center">
      {flats && flats.map((item) => 
          <Flat
            key={item.id}
            city={item.city}
            district={item.district}
            title={item.title}
            image={item.owner.image}
            total_price={item.new_price.total_price}
            discount={item.new_price.discount}
            currency={item.currency}
            num_of_bedrooms={item.num_of_bedrooms}
            num_of_bathrooms={item.num_of_bathrooms}
          />
        )
        }
        
    </div>
    </div>
    </>
  );
}
