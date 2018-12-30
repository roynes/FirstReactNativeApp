import { toggleRemember, updateEmail, updatePassword } from '../store/actions/formActions';
import { CustomButton, InputLabel, CustomCheckBox }  from '../components';
import { View, StyleSheet, PixelRatio, Alert } from  'react-native';
import { connect } from 'react-redux';
import { validate } from '../utility/validate';
import React from 'react';

let pixelRatio = PixelRatio.get();

class FormContainer extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = { 
      email: '', password: '',
      errors: {
        email: [],
        password: [],
      },
      disable: false
    };

    this.toggleCheckBox = this.toggleCheckBox.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
  }

  componentDidMount() {
    if(this.props.isRemembered) {
      this.setState({ 
        email: this.props.saved.email, 
        password: this.props.saved.password 
      });

      this.updateEmail(this.props.saved.email);
      this.updatePassword(this.props.saved.password);
    }
  }

  toggleCheckBox() {
    this.props.toggleCheckBox(!this.props.isRemembered);
    
    this.props.updateEmail(!this.props.isRemembered ? this.state.email : null);
    this.props.updatePassword(!this.props.isRemembered ? this.state.password : null);
  }

  updateEmail(text) {
    let result = validate(text, 'email,min:6');

    this.setState((prev) => {
      return {
        ...prev,
        email: text,
        errors: {
          ...prev.errors,
          email: result.errors
        },
        disable: result.errors.length > 0 ? true : false
      }
    });

    if(this.props.isRemembered) this.props.updateEmail(text);
  }

  updatePassword(text) {
    let result = validate(text, 'min:6,max:12');

    this.setState((prev) => {
      return {
        ...prev,
        password: text,
        errors: {
          ...prev.errors,
          password: result.errors
        },
        disable: result.errors.length > 0 ? true : false
      }
    });

    if(this.props.isRemembered) this.props.updatePassword(text);
  }

  render() {
    return (
      <View style={ this.props.styles }>  
        <View style={ styles.inputContainer }>
          <InputLabel 
            label='Email'
            placeholder='Input email address' 
            inputStyles={ [styles.inputLabelWidth] }
            valuechange={ this.updateEmail }
            defaultValue={ this.state.email }
            email
            errors={ this.state.errors.email }
          ></InputLabel>

          <InputLabel 
            label='Password' 
            placeholder='Input password'
            inputStyles={ [styles.inputLabelWidth] }
            valuechange={ this.updatePassword }
            defaultValue={ this.state.password }
            password
            errors={ this.state.errors.password }
          ></InputLabel>

          <CustomCheckBox
            styles={ { marginTop: 12 } }
            checked={ this.props.isRemembered }
            onchange={ this.toggleCheckBox }
            text='Remember Email/Password'
          />
        </View>

        <View style={ styles.buttonContainer }>
          <CustomButton
            text='Sign In'
            bgcolor='#aa8fdb'
            bordercolor='#aa8fdb'
            style={ styles.inputLabelWidth }
            disable={ this.state.disable }
            onclick={ () => { Alert.alert('Login Successfull') }}
          ></CustomButton>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: { 
    flex:  4, 
    alignItems: "flex-start", 
    justifyContent: "center",
  },

  buttonContainer: { 
    flex: 2, 
    alignItems: 'center', 
    justifyContent: 'center', 
  },
  
  inputLabelWidth: {
    maxWidth: ( (1440 / pixelRatio) ),
    marginTop: 5
  },
})

const mapStateToProps = (state) => { return { ...state }; };

function mapDispatchToProps(dispatch) {
  return {
    toggleCheckBox: (toggle) => dispatch(toggleRemember(toggle)),
    updateEmail: (email) => dispatch(updateEmail(email)),
    updatePassword: (password) => dispatch(updatePassword(password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);