import React from 'react';

import { createUseStyles } from 'react-jss';

import { ProfileCardTitle } from '../../../../commons/profile_card/profile_card_title/profile_card_title';

import { ProfileCardContent } from '../../../../commons/profile_card/profile_card_content/profile_card_content';
import { ProjectSection } from './project_section/project_section';

import { styles } from './projects_back_styles';

const useStyles = createUseStyles(styles);

const ProjectsBackComponent = () => {
    const classes = useStyles();
    return (
        <>
            <ProfileCardTitle
                customClasses={{
                    container: classes.title,
                    typography: classes.typography
                }}
                beforeTypography={
                    <div className={classes.background}>
                        <img
                            className={classes.backgroundImage}
                            src="https://source.unsplash.com/random/750x400"
                            alt="Project Background"
                        />
                    </div>
                }
            >
                Projects
            </ProfileCardTitle>
            <ProfileCardContent>
                <ProjectSection />
                <ProjectSection />
                <ProjectSection />
            </ProfileCardContent>
        </>
    );
};

export const ProjectsBack = ProjectsBackComponent;