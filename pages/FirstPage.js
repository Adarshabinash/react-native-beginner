import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  Button,
  Pressable,
  Modal,
} from 'react-native';
import cocacola from '../assets/coke1.jpg';
import {ImageBackground} from 'react-native';
const cocacola2 = require('../assets/coke2.jpg'); //?------We can use the require function to hold our image

const FirstPage = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={{backgroundColor: 'plum', flex: 1, padding: 20}}>
      <ScrollView>
        <Pressable onPress={() => console.log('Image is clicked')}>
          <Image source={cocacola} style={{height: 300, width: 300}} />
        </Pressable>
        <Pressable onLongPress={() => console.log('Pressed for long')}>
          <Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            exercitationem a, non facilis soluta suscipit. Nesciunt aliquam
            incidunt est, quos, dolor quidem quod tenetur velit beatae, minima
            iure? Eveniet veritatis culpa recusandae fuga maiores necessitatibus
            iste illum quaerat suscipit temporibus, enim, aut quia accusantium
            ex! Suscipit tempore molestias nemo illo voluptas alias in sint
            necessitatibus. Ipsam debitis culpa magnam reiciendis? Possimus
            quaerat officiis sunt consequatur optio iure porro minima.
            Exercitationem quod explicabo impedit eum quis harum delectus
            inventore perspiciatis dolores ut quos dicta ab cumque suscipit
            rerum odit nisi non totam animi, iusto veniam magni temporibus
            similique. Quasi dolorem illum doloribus sit sequi accusantium ipsum
            voluptatum qui debitis earum aliquid et, consequatur, eos cupiditate
            vitae cum recusandae quis reprehenderit fuga unde molestias
            assumenda nostrum? Temporibus necessitatibus nostrum illum id,
            mollitia exercitationem sequi veniam laborum ipsa, nobis quam fugit
            repudiandae rerum maxime aperiam quis ipsam consequuntur alias
            dolorum? Similique quasi facilis quam quos accusamus laborum.
            Officiis repellat autem ipsum eos minima.
          </Text>
        </Pressable>
        <Pressable onPressOut={() => console.log('pressed out')}>
          <Image source={cocacola2} style={{height: 300, width: 300}} />
        </Pressable>
        <Button
          title="Press It"
          color="midnightblue"
          onPress={() => setModalVisible(true)}
        />
      </ScrollView>
      <Modal
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
        animationType="slide">
        <View style={{backgroundColor: 'lightblue', padding: 20, flex: 1}}>
          <Button title="Close" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
};

export default FirstPage;
