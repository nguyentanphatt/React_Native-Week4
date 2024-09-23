import { Text, View, StyleSheet, Image, Button } from 'react-native';
import react, { useState } from 'react'
import book_png from '../assets/book.png'
const tiki = () => {
    const [value, setValue] = useState(1)
    const [total, setTotal] = useState(141.800)
    const increaseHandler = (prop) => {
      if(prop==='in'){
        setValue(value+1)
        setTotal((prev)=>prev+141.800)
      } else {
        if(value > 0){
          setValue(value-1)
          setTotal((prev)=>prev-141.800)
        }
        else {
          setValue(0)
          setTotal(0)
        }
      }
      
    }
  
    return (
      <View style={styles.container}>
        <View style={styles.productShop}>
          <View style={styles.productInfo}>
            <View style={styles.imgContainer}>
              <Image source={book_png} style={styles.img}/>
              <Text style={styles.text}>Mã giảm giá ưu đãi</Text>
            </View>
            <View>
              <Text style={styles.text}>Nguyên hàm tích phân và ứng dụng</Text>
              <Text style={styles.text}>Cung cấp bởi Tiki Trading</Text>
               <Text style={{color: 'red', marginBottom: 10, fontSize: 18}}>141.800 đ</Text>
              <Text style={{textDecorationLine: 'line-through', color:'grey', marginBottom: 10}}>141.000 đ</Text>
              <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20}}>
                <View style={styles.buttonContainer}>
                  <Button title='-' style={styles.btn} onPress={()=>increaseHandler('de')}/>
                  <Text>{value}</Text>
                  <Button title='+' style={styles.btn} onPress={()=>increaseHandler('in')}/>
                </View>
                <Text style={{color: 'blue'}}>Mua sau</Text>
              </View>
              <Text style={{color: 'blue'}}>Xem tại đây</Text>
            </View>
          </View>
          <View style={styles.promo}>
            <View style={styles.promocodeContainer}>
              <Text style={styles.promoCode}>
                <View style={styles.yellowBlock}></View>
              Mã giảm giá</Text>
            </View>
            <View style={{paddingRight: 50}}>
              <Button title='Áp dụng'/>
            </View>
          </View>
        </View>
        <View style={styles.gift}>
          <Text>Bạn có phiếu quà tặng cũa tiki/Goi it/UrBox?</Text>
          <Text style={{color: 'blue', paddingLeft: 20}}>Nhập tại đây ?</Text>
        </View>
        <View style={styles.price}> 
          <Text style={{fontWeight: '700', fontSize: 18, lineHeight: 21, paddingBottom: 30}}>Tạm tính</Text>
          <Text style={{color: 'red', marginBottom: 10, fontSize: 18, paddingRight: 40}}>{total.toFixed(3)} đ</Text>
        </View>
        <View style={styles.total}>
          <View style={{paddingLeft: 20, flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontWeight: '700', fontSize: 18, lineHeight: 21, paddingBottom: 30, color:'gray'}}>Thành tiền</Text>
          <Text style={{color: 'red', marginBottom: 10, fontSize: 18, paddingRight: 40}}>{total.toFixed(3)} đ</Text>
          </View>
          <Button title='Tiến hành đặt hàng' color='red'/>
        </View>
      </View>
    );
}

export default tiki

const styles = StyleSheet.create({
    container:{
      display: 'flex',
      backgroundColor: '#fff',
      justifyContent: 'center',
      flex: 1
    },
    productShop: {
      display: 'flex',
      backgroundColor: '#fff',
    },
    productInfo:{
      flexDirection: 'row',
    },
    imgContainer: {
      paddingHorizontal: 20
    },
    img:{
      marginBottom: 20
    },
    text:{
      marginBottom: 20,
    },
    buttonContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    btn:{
      width: 50,
      height: 50,
    },
    promo:{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingTop: 20,
      paddingLeft: 20
    },
    promocodeContainer:{
      borderWidth: 1,
      width: 250,
      height: 40
  
    },
    promoCode:{
      textAlign: 'center',
      fontSize: 18,
      lineHeight: 21,
      fontWeight: '700',
      paddingTop: 8
    },
    yellowBlock: {
      borderWidth: 5,
      width: 20,
      height: 10,
      borderColor: 'yellow',
      paddingRight: 20,
      marginRight: 20
    },
    gift:{
      backgroundColor: '#fff',
      paddingTop: 40,
      flexDirection: 'row',
      paddingLeft: 20
    },
    price:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 40,
      paddingLeft: 20
    },
    total: {
      marginTop: 40
    }
  });