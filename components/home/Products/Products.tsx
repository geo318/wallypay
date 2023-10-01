import { products } from '/config'
import { Anima } from '/components/Anima'
import { HomeText } from '/types'
import { Item } from './item'

export const Products = ({ text }: { text: HomeText['products'] }) => {
  return (
    <div className='bg-app-blue-dark rounded-lg py-14 text-white '>
      <Anima>
        <h3 className='lg:text-3xl text-2xl font-bold lg:p-14 p-10 pt-0'>{text.heading}</h3>
      </Anima>
      <div className='flex md:flex-col flex-row gap-y-28 lg:px-28 px-10 justify-around md:justify-normal'>
        <div className='flex md:flex-row flex-col justify-between content-between'>
          {products.slice(0, 4).map((props) => (
            <Item key={props.name} {...props} name={props.name} text={text} />
          ))}
        </div>
        <div className='flex md:flex-row flex-col justify-between content-between'>
          {products.slice(4).map((props) => (
            <Item key={props.name} {...props} name={props.name} text={text} />
          ))}
        </div>
      </div>
    </div>
  )
}
