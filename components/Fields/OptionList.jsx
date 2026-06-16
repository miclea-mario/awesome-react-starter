import { cn } from '@lib/utils';
import Option from './Option';

const OptionList = ({ items, getItemProps, getMenuProps, highlightedIndex, isOpen }) => {
  const renderItem = (item, index) => {
    const props = getItemProps({ item, index });
    const isHover = highlightedIndex === index;

    return (
      <Option key={String(item.value)} isHover={isHover} {...props}>
        {item.label}
      </Option>
    );
  };

  return (
    <ul
      className={cn(
        'my-0 overflow-y-auto p-0 outline-hidden',
        isOpen && items?.length > 0 && 'dropdown-list'
      )}
      {...getMenuProps()}
    >
      {isOpen && items?.length > 0 ? items.map(renderItem) : null}
    </ul>
  );
};

export default OptionList;
