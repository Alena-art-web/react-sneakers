import { useEffect} from 'react'
import { useSelector } from 'react-redux'
import { fetchGoods} from '../../redux/slices/goods'
import { RootState, useAppDispatch } from '../../redux/store'
import ProductItem from '../ProductItem'
import s from './index.module.scss'


const Home = () => {
  const { items } = useSelector((state: RootState) => state.goods)
  const dispatch = useAppDispatch()

  const getData = async () => {
    dispatch(fetchGoods({}))
  }

  useEffect(() => {
    getData()
  }, [])
  console.log(items)

  return (
    <div>
      <ul className={s.container}>
        {items.map((item) =>
          <li
            key={item._id}
            className={s.item}
          >
            <ProductItem {...item} />
          </li>
        )}
      </ul>

    </div>
  )
}

export default Home