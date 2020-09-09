import React, { useState, useEffect } from 'react'
import useElements from '../apiHooks/useElements'
import useStyles from '../apiHooks/useStyles'
import 'antd/dist/antd.css';
import Button from './button'
import { useSpring, animated } from 'react-spring'
import Boxshape from './Boxshape';
import Div from '../elements/Div'
import '../css/style.css'
import Table from '../elements/Table';

function Actions({ i }) {
      const { data, put, deleting, SetnewPost } = useElements();
      const { GetByName, SsetPut, SsetDel, SsetPost } = useStyles()
      const [isover, setisover] = useState(false)


      const props = useSpring({ transform: isover ? 'scale(1)' : 'scale(0)' })
      function update(event, i) {
            put({ id: i.id, data: { text: `${event.target.innerText}` } });
      }

      function handlechange(e) {
            // SsetPost({ name: `${i.id}`, style: { backgroundColor: 'red', color: 'blue' } });
            // put({ id: i.id, data: { style: `${SGet.name}` } });
      }

      function onclick(e) {
            // SsetPost({ name: `${i.id}`, style: { color: 'red' } })
            // GetByName(i.id).forEach((Si) => setTimeout(() => {
            //       SsetDel(Si.id)
            // }, 0))
      }
      function Items() {
            return (
                  <div
                        style={GetByName(i.id).map(i => { return JSON.parse(i.style) })[0]}
                  >
                        {
                              i.tag === 'img' && <img src={i.src} />
                        }
                        {
                              i.tag === 'div' && <Div i={i} />
                        }
                        {
                              i.tag === 'table' && <Table i={i} />
                        }
                  </div>
            )
      }



      return (
            <div
                  className={i.id}
                  onClick={onclick}
                  onMouseLeave={() => setisover(false)}
                  onMouseOver={() => setisover(true)}
                  style={{ paddingLeft: "200px", display: 'flex' }}
            >

                  <animated.div style={props} >
                        <Button i={i} />
                  </animated.div>
                  <Boxshape Items={Items} i={i} />
            </div >
      )
}
export default Actions;