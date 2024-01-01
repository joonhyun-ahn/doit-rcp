import ClassComonent from './ClassComponet';
import ArrowComponent from './ArrowComponent';

export default function App() {
  return (
    <ul>
      <ClassComonent href="http://www.google.com" text="go to Google" />
      <ArrowComponent href="http://twitter.com" text="go to Twitter" />
    </ul>
  );
}
