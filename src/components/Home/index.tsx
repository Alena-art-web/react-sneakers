import { useEffect} from 'react'
import { useSelector } from 'react-redux'
import { fetchGoods} from '../../redux/slices/goods'
import { RootState, useAppDispatch } from '../../redux/store'
import LoadingBlock from '../LoadingBlock'
import ProductItem from '../ProductItem'
import s from './index.module.scss'


const Home = () => {
  const { items, status } = useSelector((state: RootState) => state.goods)
  const favorites = useSelector((state: RootState) => state.favorites.data)
  const cart = useSelector((state: RootState) => state.cart.items)
  const dispatch = useAppDispatch()

  const getData = () => {
    dispatch(fetchGoods({}))
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <ul className={s.container}>
        {status === 'loading' ?
        [... new Array(4)].map((_, index) => <LoadingBlock key={index}/>) :
        items.map((item) =>
          <li
            key={item._id}
            className={s.item}
          >
            <ProductItem 
              {...item} 
              activeFav={Boolean(favorites.find((data) => data._id === item._id))}
              activeBtn={Boolean(cart.find((data) => data._id === item._id))}
            />
          </li>
        )}
      </ul>

    </div>
  )
}

export default Home