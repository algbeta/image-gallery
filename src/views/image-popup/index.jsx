import { connect } from 'react-redux';
import ImagePopup from './popup';
import { actions as uiActions } from '../../state/ui';
import { actions } from '../../state/images';

const mapStateToProps = ({ images, ui }) => ({
  item: images.byId[ui.selected]
});

const mapDispatchToProps = {
  close: () => uiActions.setSelectedImage(null),
  deleteImage: actions.deleteImage,
  saveEditableChanges: actions.updateImage
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImagePopup);
