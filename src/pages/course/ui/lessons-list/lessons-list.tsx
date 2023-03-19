import {Paper, Typography, List, ListItem, ListItemIcon} from '@mui/material';
import {LockRounded, LockOpenRounded} from '@mui/icons-material';
import {clsx} from 'clsx';

import {getPreviewImageLink} from '../../utils';
import {LessonStatus} from '../../typedef';

import './lessons-list.scss';

import type {Lesson} from '../../typedef';


type Props = {
	chosenOrder: number,
	handleChangeOrder: (order: number) => void,
	lessons: Lesson[],
};

export const LessonsList = ({chosenOrder, handleChangeOrder, lessons}: Props) => {
	return (
		<List className="lessons-list">
			{lessons.map(({id, title, previewImageLink, order, status}) => {
				const previewLink = getPreviewImageLink(previewImageLink, order);
				const onClick = () => handleChangeOrder(order - 1);
				const isChosen = order - 1 === chosenOrder;

				const listItemClassNames = clsx('lessons-list-item', isChosen && 'lessons-list-item_chosen');

				return (
					<Paper key={id}>
						<ListItem className={listItemClassNames} onClick={onClick}>
							<img className="lessons-list-item__image" src={previewLink} alt="title"/>
							<Typography title={title} noWrap={true}>{title}</Typography>
							<ListItemIcon className="lessons-list-item__icon">
								{status === LessonStatus.locked ? <LockRounded/> : <LockOpenRounded/>}
							</ListItemIcon>
						</ListItem>
					</Paper>
				);
			})}
		</List>
	);
};
