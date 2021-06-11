import { List, ListItem } from '@material-ui/core';

export interface ContentListProps {
    titles: string[];
}

export default function ContentList(props: ContentListProps) {
    let contentList = [];
    for (let i = 0; i < props.titles.length; i++) {
        const title = props.titles[i];
        const anchor = `#anchor-${i.toString()}`;
        contentList.push(<ListItemLink href={anchor}>{title}</ListItemLink>)
    }

    return (
        <List>
            {contentList}
        </List>
    );
}

function ListItemLink(props: any) {
    return <ListItem button component="a" {...props} />;
}