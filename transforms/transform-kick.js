module.exports = {
  event: 'kick',
  method: 'onKick',
  transform: (self, username) => {
    return {
      username: username
    };
  }
};