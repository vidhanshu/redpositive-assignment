import {Button, Input} from '../components';
import {Colors, globalStyles} from '../styles';
import {
  EMAIL,
  FB_LINK,
  INSTA_LINK,
  LINKEDIN_LINK,
  TWITTER_LINK,
  YOUTUBE,
} from '../configs';
import {Image, Linking, StyleSheet, Text, View} from 'react-native';
import {setEmail, setError, setMessage, setMobile, setName} from '../redux';
import {useAppDispatch, useAppSelector} from '../redux/store';

import AntIcons from 'react-native-vector-icons/AntDesign';
import Micons from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import {ScrollView} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {validate_form_data} from '../utils';

const Form = () => {
  const form = useAppSelector(state => state.form);
  const dispatch = useAppDispatch();

  const handleSubmit = () => {
    const result = validate_form_data(form);
    if (result.valid) {
      Linking.openURL(
        `mailto:${EMAIL}?subject=Contact Us&cc=${form.email}&body=Name: ${form.name}\nMobile: ${form.mobile}\nEmail: ${form.email}\nMessage: ${form.message}`,
      );
      dispatch(setError('Thank you for contacting us!'));
    } else {
      dispatch(setError(result.message));
    }
  };

  return (
    <ScrollView
      style={[globalStyles.container]}
      showsVerticalScrollIndicator={false}>
      <View style={globalStyles.stack}>
        <View style={styles.header}>
          <Image
            source={require('../../assets/images/logo.webp')}
            resizeMode="contain"
            style={styles.logo}
          />
          <Text style={styles.headerText}>Redpositive</Text>
        </View>
        <Text style={[globalStyles.title, globalStyles.textCenter]}>
          Have some questions!!!
        </Text>
        <Input
          value={form.name}
          onChangeText={text => dispatch(setName(text))}
          icon={
            <AntIcons name="user" size={20} color={Colors.placeholderIcon} />
          }
          placeholder="Name *"
        />
        <Input
          onChangeText={text => dispatch(setEmail(text))}
          value={form.email}
          keyboardType="email-address"
          icon={
            <Micons
              name="alternate-email"
              size={20}
              color={Colors.placeholderIcon}
            />
          }
          placeholder="E-mail *"
        />
        <Input
          onChangeText={text => dispatch(setMobile(text))}
          value={form.mobile}
          keyboardType="phone-pad"
          maxLength={10}
          icon={
            <AntIcons name="mobile1" size={20} color={Colors.placeholderIcon} />
          }
          placeholder="Mobile *"
        />
        <Input
          value={form.message}
          onChangeText={text => dispatch(setMessage(text))}
          icon={
            <AntIcons
              name="message1"
              size={20}
              color={Colors.placeholderIcon}
            />
          }
          placeholder="Message *"
          multiline
          numberOfLines={4}
        />
        <Button onPress={handleSubmit} title="Send" />
        <Text
          style={[
            globalStyles.text,
            form.error.includes('Thank') ? styles.success : styles.error,
          ]}>
          {form.error}
        </Text>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={[globalStyles.text, globalStyles.textCenter]}>
          Find us on social media
        </Text>
        <View style={styles.socialContainer}>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(FB_LINK);
            }}>
            <Image
              resizeMode="cover"
              style={styles.socialIcons}
              source={require('../../assets/images/facebook.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(LINKEDIN_LINK);
            }}>
            <Image
              resizeMode="cover"
              style={styles.socialIcons}
              source={require('../../assets/images/linkedin.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(INSTA_LINK);
            }}>
            <Image
              resizeMode="cover"
              style={styles.socialIcons}
              source={require('../../assets/images/instagram.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(YOUTUBE);
            }}>
            <Image
              resizeMode="cover"
              style={styles.socialIcons}
              source={require('../../assets/images/youtube.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(TWITTER_LINK);
            }}>
            <Image
              resizeMode="cover"
              style={styles.socialIcons}
              source={require('../../assets/images/twitter.png')}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.copyright}>
          ©All Right Reserved | RedPositive Service OPC Private Limited
        </Text>
      </View>
    </ScrollView>
  );
};

export default Form;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginBottom: 20,
  },
  logo: {
    width: 50,
    height: 50,
  },
  headerText: {
    fontFamily: 'NunitoSans-Regular',
    color: Colors.primary.main,
    fontSize: 24,
    fontWeight: 'bold',
  },
  error: {
    color: Colors.primary.main,
    fontSize: 14,
    textAlign: 'center',
  },
  success: {
    color: Colors.success,
    fontSize: 14,
    textAlign: 'center',
  },
  bottomContainer: {
    flexDirection: 'column',
    gap: 15,
    marginTop: 20,
  },
  socialContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
  },
  socialIcons: {
    width: 25,
    height: 25,
  },
  copyright: {
    fontFamily: 'NunitoSans-Regular',
    fontSize: 12,
    textAlign: 'center',
  },
});
