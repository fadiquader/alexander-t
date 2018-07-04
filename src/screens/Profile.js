import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//
import { Input, Container, Button, Group } from '../components';
import { submitProfileForm, updateFieldValue } from '../redux/profile/actions';
// import { database } from '../firebase'
// ;
class Profile extends React.Component {
  onChangeText = (key, value) => {
    this.props.updateFieldValue({
      key,
      value
    })
  };

  submitForm = () => {
    this.props.submitProfileForm()
  };

  render() {
    const { profile } = this.props;
    return (
      <Container>
        <Group>
          <Input
            label="First Name"
            inputProps={{
              value: profile.firstName,
            }}
            name="firstName"
            onChangeText={this.onChangeText}
          />
          <Input
            label="Last Name"
            inputProps={{
              value: profile.lastName,
            }}
            name="lastName"
            onChangeText={this.onChangeText}
          />
        </Group>
        <Group>
          <Input
            label="Company"
            inputProps={{
              value: profile.company,
            }}
            name="company"
            onChangeText={this.onChangeText}
          />
          <Input
            label="Department"
            inputProps={{
              value: profile.department,
            }}
            name="department"
            onChangeText={this.onChangeText}
          />
          <Input
            label="Position"
            inputProps={{
              value: profile.position,
            }}
            name="position"
            onChangeText={this.onChangeText}
          />
        </Group>
        <Group>
          <Input
            label="Email"
            inputProps={{
              keyboardType: 'email-address',
              autoCapitalize: 'none',
              value: profile.email,
            }}
            name="email"
            onChangeText={this.onChangeText}
          />
        </Group>
        <Group
          center
          container
        >
          <Button
            disabled={profile.loading}
            onPress={this.submitForm}>
            Save
          </Button>
        </Group>
      </Container>
    )
  }
}

const mspState = ({ profile, }) => ({ profile, });
const mspDispatch = dispatch => bindActionCreators({
  submitProfileForm,
  updateFieldValue,
}, dispatch);

export default connect(mspState, mspDispatch)(Profile);
