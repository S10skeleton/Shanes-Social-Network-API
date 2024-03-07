// imports 
const router = require('express').Router();
const {
getAllThoughts,
getThoughtById,
createThought,
updateThought,
deleteThought,
addReaction,
removeReaction
} = require('../../controllers/thoughtController');

// route to get all thoughts 
router.route('/').get(getAllThoughts);
// route to get thought by Id 
router.route('/:thoughtId').get(getThoughtById);
// route to create a new thought 
router.route('/').post(createThought);
// route to update thought by Id 
router.route('/:thoughtId').put(updateThought);
// route to delete thought by Id 
router.route('/:thoughtId').delete(deleteThought);
// route to add Reaction 
router.route('/:thoughtId/reactions').post(addReaction);
// route to delete reaction 
router.route('/thoughtId/reactions/:reactionId').delete(removeReaction);
// export 
module.exports = router;
