import { products } from '/config'
import { Anima } from '/components/Anima'
import { HomeText } from '/types'
import { Item } from './item'

export const Products = ({ text }: { text: HomeText['products'] }) => {
  return (
    <div className='bg-app-blue-dark rounded-lg py-14 text-white '>
      <Anima>
        <h3 className='text-3xl font-bold p-14 pt-0'>{text.heading}</h3>
      </Anima>
      <div className='flex flex-col gap-y-28 px-28'>
        <div className='flex justify-between content-between'>
          {products.slice(0, 4).map((props) => (
            <Item key={props.name} {...props} name={props.name} text={text} />
          ))}
        </div>
        <div className='flex justify-between content-between'>
          {products.slice(4).map((props) => (
            <Item key={props.name} {...props} name={props.name} text={text} />
          ))}
        </div>
      </div>
    </div>
  )
}
