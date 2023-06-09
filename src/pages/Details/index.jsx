import { Container, Main, ButtonBack, Content } from './styles';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/Button';
import { ButtonText } from "../../components/ButtonText";

import { RiArrowLeftSLine } from 'react-icons/ri';
import { BiMinus, BiPlus } from 'react-icons/bi';

import { Link, useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';

export function Details(){
  const [quantity, setQuantity] = useState(1)
  const [data, setData] = useState(null)

  const params = useParams()
  const navigate = useNavigate()
  const { user } = useAuth()

  const imageURL = data && `${api.defaults.baseURL}/files/${data.image}`;

  function handleAddItem() {
    setQuantity (quantity+1)
  }

  function handleRemoveItem() {
    setQuantity (quantity-1)
    if(quantity == 1){
      setQuantity(1)
    }
  }

  function handleGoToEditPage(){
    navigate(`/edit/${data.id}`)
  }

  useEffect(() => {
    async function fetchDish(){
      const responseAPI = await api.get(`/dishes/${params.id}`)
      setData(responseAPI.data)
    }

    fetchDish()
  }, [])

  return(
    <Container>
      <Header />

      {
      data &&
      <Main>
        <ButtonBack>
          <Link to="/">
            <ButtonText title="voltar" icon={RiArrowLeftSLine}/>
          </Link>
        </ButtonBack>

        <Content>
          <img src={imageURL} alt="Imagem do prato" />

          <div className='details'>
            <div className='details-wrapper'>
              <h2>{data.title}</h2>
              <p>{data.description}</p>
            </div>

            <div className="ingredientsTags">
              {
              data.ingredients.map ((ingredient) => (<div className="tag">{ingredient.name}</div>))
              }
            </div>

            <div className='AmountItemsAndBuy-wrapper'>
              {
              user.isAdmin ?

              <div className='Amount'>
                <Button title="Editar prato" onClick={handleGoToEditPage} />
              </div>

              :

              <div className='Amount'>
                <button className='MinusItem' onClick={handleRemoveItem}>
                  <BiMinus />
                </button>

                <span>0{quantity}</span>
              
                <button className='PlusItem' onClick={handleAddItem}>
                  <BiPlus />
                </button>

                <Button title={`incluir ∙ R$ ${data.price}`}/>
              </div>
              }

            </div>
          </div>
        </Content>
      </Main>
      }

      <Footer />
    </Container>
  )
}