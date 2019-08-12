import { connect } from 'react-redux';
import { actions, selectors } from '../../state/images';
import { actions as uiActions } from '../../state/ui';
import ImageList from './ImageList';

const mapStateToProps = ({ images, ui }) => ({
  items: selectors.getItemsArray(images)
});

const mapDispatchToProps = {
  loadImages: actions.loadImages,
  setSelectedImage: uiActions.setSelectedImage
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageList);
