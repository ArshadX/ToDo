import React from 'react';
import {
  FlatList,
  Image,
  Modal,
  StatusBar,
  Text,
  TextComponent,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Alertbox} from '../../components/AlertBox';
import Blocks from '../../components/Blocks';
import Button from '../../components/Button';
import ModalContainer from '../../components/ModalContainer';
import {addTask, removeTask} from '../../redux/user/userActions';
import {dashboard} from '../../styles/styles';

const Dashboard = () => {
  const [visible, setVisible] = React.useState(false);
  const userData = useSelector(state => state.user);
  const [task, setTask] = React.useState('');
  const dispatch = useDispatch();

  //Add Task to redux Store
  const onAddTask = async () => {
    const d = new Date();
    let hour = d.getHours();
    let minute = d.getMinutes();
    let time = hour + ':' + minute;
    let taskDetails = {
      task: task,
      time: time,
    };
    let temp = await userData.list;
    temp.push(taskDetails);
    console.log(temp);
    dispatch(addTask(temp));
    setVisible(!visible);
  };
  // Remove task from redux store
  const onRemoveTask = item => {
    let temp = userData.list;
    let index = temp.indexOf(item);
    if (index > -1) {
      temp.splice(index, 1);
    }
    dispatch(removeTask(temp));
  };
  return (
    <View style={dashboard.container}>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <Modal
        animationType="slide"
        statusBarTranslucent={true}
        visible={visible}
        onRequestClose={() => setVisible(!visible)}
        transparent={true}>
        <ModalContainer
          onCrossPress={() => setVisible(!visible)}
          onPressButton={onAddTask}
          onChangeText={text => setTask(text)}
          buttonDisable={task === '' ? true : false}
        />
      </Modal>
      <View style={dashboard.header}>
        {userData?.list.length === 0 ? (
          <Image
            style={dashboard.image}
            source={require('../../assets/images/EmptyIcon.png')}
          />
        ) : (
          <FlatList
            data={userData?.list}
            renderItem={({item}) => (
              <Blocks
                text={item.task}
                subtitle={item.time}
                onPressIcon={() =>
                  Alertbox(
                    'Caution!',
                    'Do you really want to remove it?',
                    onRemoveTask,
                    item,
                  )
                }
              />
            )}
          />
        )}
      </View>
      <View style={dashboard.footer}>
        <Button
          onPress={() => {
            setTask('');
            setVisible(!visible);
          }}
          iconName="plus"
          title="Task"
          disabled={false}
        />
      </View>
    </View>
  );
};

export default Dashboard;
