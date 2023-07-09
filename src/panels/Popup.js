import React, { useState, useEffect, useRef } from 'react';
import {
  ActionSheet,
  ActionSheetItem,
  AdaptiveIconRenderer,
  ActionSheetDefaultIosCloseItem,
  usePlatform,
} from '@vkontakte/vkui';

import {
  Icon20WriteOutline,
  Icon28EditOutline,
  Icon20ListPlayOutline,
  Icon28ListPlayOutline,
  Icon20ShareOutline,
  Icon28ShareOutline,
  Icon20DeleteOutline,
  Icon28DeleteOutline,
  Icon20CopyOutline,
  Icon28CopyOutline,
} from '@vkontakte/icons';

const Popup = ({ iconsTargetRef }) => {
  //const onClose = () => isPopup(null);
  //   const iconsTargetRef = useRef();

  return (
    <ActionSheet
      //onClose={onClose}
      iosCloseItem={<ActionSheetDefaultIosCloseItem />}
      toggleRef={iconsTargetRef}
    >
      <ActionSheetItem
        autoClose
        before={
          <AdaptiveIconRenderer
            IconCompact={Icon20WriteOutline}
            IconRegular={Icon28EditOutline}
          />
        }
      >
        Редактировать профиль
      </ActionSheetItem>
      <ActionSheetItem
        autoClose
        before={
          <AdaptiveIconRenderer
            IconCompact={Icon20ListPlayOutline}
            IconRegular={Icon28ListPlayOutline}
          />
        }
      >
        Слушать далее
      </ActionSheetItem>
      <ActionSheetItem
        autoClose
        before={
          <AdaptiveIconRenderer
            IconCompact={Icon20ShareOutline}
            IconRegular={Icon28ShareOutline}
          />
        }
      >
        Поделиться
      </ActionSheetItem>
    </ActionSheet>
  );
};

export default Popup;
