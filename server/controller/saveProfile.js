import User from "../model/user.js";

export const saveprofile = async (request, response) => {
    try {
        const { _id } = request.params;
        const userData = request.body;

      
        let user = await User.findByIdAndUpdate(
            _id,
            { profile: userData },
            { new: true }
        );

        return response.status(200).json({ msg: 'Profile saved successfully', user });
    } catch (error) {
        console.error('Error while saving profile:', error);
        return response.status(500).json({ msg: 'Error while saving profile' });
    }
};

export const getProfile = async (request, response) => {
    try {
        const { _id } = request.params;
        let user = await User.findById(_id);
        if (!user) {
            return response.status(404).json({ msg: 'User not found' });
        }
        const { profile } = user;
        return response.status(200).json({ msg: 'Profile retrieved successfully', profile });
    } catch (error) {
        console.error('Error while retrieving profile:', error);
        return response.status(500).json({ msg: 'Error while retrieving profile' });
    }
};


export const updateCoins = async (request, response) => {
    try {
      const { _id } = request.params;
      const { coins } = request.body;
  
      
      let user = await User.findByIdAndUpdate(
        _id,
        { 'profile.totalCoins': coins },
        { new: true }
      );
  
      return response.status(200).json({ msg: 'Coins updated successfully', user });
    } catch (error) {
      console.error('Error updating coins:', error);
      return response.status(500).json({ msg: 'Error updating coins' });
    }
  };

