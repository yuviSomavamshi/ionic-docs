import clsx from 'clsx';
import React from 'react';

import styles from './index.module.scss';

export default function AppWizard(props) {
  return (
    <div {...props} className={clsx(props.className, 'app-wizard', styles.appWizard)}>
      <div className="heading-group">
        <header>Try our App Wizard</header>
        <p>
          Use our App Wizard to generate an Simulator project visually. Choose a template, custom colors, app icon, and
          JavaScript Framework to get building quicker.
        </p>
      </div>
      <div>
        <a href="http://localhost:8080/start" className="wizard-button">
          Open Wizard <ion-icon name="arrow-forward-outline" />
        </a>
      </div>
    </div>
  );
}
