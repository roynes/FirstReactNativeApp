function mapper(name = '') {
  switch(name) {
    case 'max': 
      return max;
    case 'min':
      return min;
    case 'email': 
      return email
    default:
      return false;
  }
}

function max(value = '', num = 0) {
  if( value.length > num ) {
    return `maximum of ${num} required`
  }

  return false;
}

function min(value = '', num = 0) {

  if( value.length < num ) {
    return `minimum of ${num} characters required`
  }

  return false;
}

function email(value) {
  const emailRegex = RegExp(
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
  );
  
  if(! emailRegex.test(value) ) {
    return `must be a valid email address`
  }

  return false;
}

export default function (value='', constraint='') {
  let errors = [];

  if (constraint.length === 0) return { errors };

  constraintToken = constraint.split(',');

  constraintToken.forEach(element => {
    let [constraintName, constraintValue] = element.split(':');

    let result;

    if(typeof mapper(constraintName) === 'boolean') return;

    result = constraintName === 'email' ? (mapper(constraintName))(value) : (mapper(constraintName))(value, constraintValue);

    if(false != result) {
      errors.push(result);
    }
  });

  return { errors };
}