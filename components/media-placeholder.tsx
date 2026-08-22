type MediaPlaceholderProps = { label: string; hint?: string; project?: string; className?: string };

export function MediaPlaceholder({ label, hint, project, className = "" }: MediaPlaceholderProps) {
  return (
    <div className={`media-placeholder ${className}`} role="img" aria-label={`${label} placeholder`}>
      <span className="media-placeholder__corner">FIG. / PENDING</span>
      <span className="media-placeholder__cross" aria-hidden="true" />
      <div className="media-placeholder__copy">
        {project ? <span>{project}</span> : null}
        <strong>{label}</strong>
        <small>{hint ?? "Asset required"}</small>
      </div>
      <span className="media-placeholder__scale" aria-hidden="true">0&nbsp;&nbsp;25&nbsp;&nbsp;50&nbsp;&nbsp;75&nbsp;&nbsp;100</span>
    </div>
  );
}
