from pathlib import Path
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import cm
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak, KeepTogether

ROOT = Path(__file__).resolve().parents[2]
OUT = ROOT / 'output' / 'pdf' / 'Oguzhan_Oguz_Technical_Interview_Preparation.pdf'
OUT.parent.mkdir(parents=True, exist_ok=True)

styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name='TitleCustom', parent=styles['Title'], fontName='Helvetica-Bold', fontSize=24, leading=29, textColor=colors.HexColor('#12304A'), alignment=TA_CENTER, spaceAfter=16))
styles.add(ParagraphStyle(name='SubTitle', parent=styles['Normal'], fontName='Helvetica', fontSize=11, leading=15, textColor=colors.HexColor('#52606D'), alignment=TA_CENTER, spaceAfter=22))
styles.add(ParagraphStyle(name='H1Custom', parent=styles['Heading1'], fontName='Helvetica-Bold', fontSize=17, leading=22, textColor=colors.HexColor('#12304A'), spaceBefore=10, spaceAfter=10))
styles.add(ParagraphStyle(name='H2Custom', parent=styles['Heading2'], fontName='Helvetica-Bold', fontSize=12, leading=16, textColor=colors.HexColor('#0D5C63'), spaceBefore=10, spaceAfter=5))
styles.add(ParagraphStyle(name='Question', parent=styles['Normal'], fontName='Helvetica-Bold', fontSize=9.5, leading=13, textColor=colors.HexColor('#172B3A'), spaceBefore=6, spaceAfter=2))
styles.add(ParagraphStyle(name='Answer', parent=styles['Normal'], fontName='Helvetica', fontSize=9.1, leading=13.1, textColor=colors.HexColor('#263238'), spaceAfter=2))
styles.add(ParagraphStyle(name='Follow', parent=styles['Normal'], fontName='Helvetica-Oblique', fontSize=8.8, leading=12.5, textColor=colors.HexColor('#52606D'), leftIndent=10, spaceAfter=5))
styles.add(ParagraphStyle(name='Small', parent=styles['Normal'], fontName='Helvetica', fontSize=8.3, leading=11.5, textColor=colors.HexColor('#52606D'), spaceAfter=4))

def p(text, style='Answer'):
    return Paragraph(text, styles[style])

def qa(n, question, answer, followups=None):
    blocks = [p(f'{n}. {question}', 'Question'), p(answer)]
    if followups:
        blocks.append(p('<b>Possible follow-up:</b> ' + followups, 'Follow'))
    return KeepTogether(blocks)

def section(title, intro=None):
    out = [p(title, 'H1Custom')]
    if intro:
        out.append(p(intro, 'Small'))
    return out

def footer(canvas, doc):
    canvas.saveState()
    canvas.setStrokeColor(colors.HexColor('#D7E0E6'))
    canvas.line(1.7*cm, 1.35*cm, A4[0]-1.7*cm, 1.35*cm)
    canvas.setFont('Helvetica', 8)
    canvas.setFillColor(colors.HexColor('#607080'))
    canvas.drawString(1.7*cm, 0.9*cm, 'Oguzhan Oguz | Technical Interview Preparation')
    canvas.drawRightString(A4[0]-1.7*cm, 0.9*cm, f'Page {doc.page}')
    canvas.restoreState()

story = []
story += [Spacer(1, 3.0*cm), p('Technical Interview Preparation', 'TitleCustom'),
          p('Master\'s thesis and research interviews: signal processing, state estimation, and multimodal perception', 'SubTitle'),
          p('<b>How to use this document</b><br/>Practice the short answers aloud, then use the follow-ups to test whether you can explain assumptions, limitations, and next steps. Statements about the current LiDAR-Visual-Inertial SLAM work are limited to the scope documented in the available CV. No final recovery-system performance, benchmark result, or individual implementation ownership beyond that source is claimed here.', 'Answer'),
          Spacer(1, 12), p('<b>Source basis</b><br/>KTH course reports and presentations in the portfolio repository, the B.Sc. Inside-Out Tracking final report, the UMRAM jitter report, the EE435 modulation-classification report, and the current CV. The document separates documented work from reasonable interview reasoning and proposed future experiments.', 'Small'), PageBreak()]

story += section('1. Top 25 Highest-Priority Questions', 'These questions concentrate on the current SLAM research, the B.Sc. tracking project, and the most relevant signal-processing work.')
top = [
('What is the central question in your current LiDAR-Visual-Inertial SLAM work?', 'I am investigating how a LiDAR-Visual-Inertial estimator behaves when its measurements become unreliable, especially under weak LiDAR geometry, low texture, visual feature starvation, perceptual aliasing, and aggressive motion. The goal is to understand failure modes and evaluate ways to make sensor use more robust. The available source documents this as ongoing research, so I would describe it as analysis and evaluation work rather than a completed recovery system.', 'How would you define LiDAR degeneracy? Which state directions become poorly constrained?'),
('Why can LiDAR become degenerate?', 'LiDAR constrains motion through geometric structure in the scene. A corridor, a long flat wall, or repeated structure can make some pose changes produce very similar residuals. In those directions, the measurement Jacobian contains little independent information, so the estimator has high uncertainty or becomes sensitive to noise.', 'How would eigenvalues or singular values of an information matrix reveal this?'),
('Why add camera and IMU measurements to LiDAR?', 'The modalities fail differently. LiDAR provides geometric constraints, visual features may add image-based constraints when geometry is weak, and the IMU provides high-rate motion information between exteroceptive updates. Fusion can help when one modality is weak, but only if calibration, synchronization, and measurement quality are handled carefully.', 'What happens if the camera has low texture at the same time as LiDAR is degenerate?'),
('What does innovation gating mean in this context?', 'An innovation compares an incoming measurement with the state predicted by the estimator. A gate can reject or downweight measurements whose residual is inconsistent with the expected uncertainty. It can protect the filter from mismatched visual associations, but an overly strict gate can also remove useful measurements.', 'How would you set a gate using a Mahalanobis distance?'),
('What is the practical limitation of sparse visual features?', 'Sparse features only help where stable, distinctive image structure exists. Low texture, motion blur, occlusion, lighting changes, or repeated patterns can reduce the number or reliability of associations. Therefore visual support should not be described as a guaranteed fix for LiDAR degeneracy.', 'How would you detect feature starvation before it damages the estimate?'),
('What did you personally do in the current SLAM work?', 'The documented scope says I investigated robustness under difficult geometry and motion, designed and evaluated several visual and information-aware strategies, built a reproducible ROS-based experimental pipeline, and conducted repeated interleaved trials with statistical analysis. I would be explicit that the project is ongoing and avoid claiming a validated recovery method unless I can show the supporting experiment.', 'Which parts came from FAST-LIO-VF or another existing codebase, and which parts did you change?'),
('Why are repeated, interleaved trials important for SLAM experiments?', 'Many perception systems have nondeterminism from feature extraction, matching, timing, and asynchronous processing. A single run can look better for accidental reasons. Repeated interleaved trials reduce time-order confounds and help distinguish a stable effect from run-to-run variation.', 'Which statistics and plots would you report?'),
('What would a convincing ablation study look like?', 'I would keep the dataset, trajectory, calibration, and evaluation procedure fixed, then compare a baseline with one change at a time. For example, compare no visual gating, innovation gating only, robust weighting only, and the combined configuration. I would repeat each condition and report both accuracy or trajectory error and failure rate.', 'What baseline is fair if the proposed method adds computation?'),
('Why does IMU-only position estimation drift?', 'Position requires integrating acceleration twice. A small accelerometer bias first creates a velocity error and then a position error that grows over time. Orientation error also projects gravity incorrectly into the horizontal axes, which can dominate the result.', 'Why does a camera or LiDAR measurement help constrain that drift?'),
('How would timestamp misalignment affect camera-IMU fusion?', 'The estimator would associate an image measurement with the wrong inertial state. During fast motion this creates systematic residuals, apparent feature mismatch, and biased pose updates. I would check clock domains, transport latency, and synchronization before attributing this to a filter problem.', 'How could you estimate a constant time offset?'),
('Describe your B.Sc. Inside-Out Tracking project without overstating your role.', 'It was a team project that built a VR tracking prototype using a Raspberry Pi camera and BNO055 IMU, with camera and IMU information used for 6-DoF tracking, UDP communication, and Python VTK rendering. My documented contribution was the low-latency wireless link, real-time rendering of the 3D head model, and assistance with image processing. I would not claim that I alone implemented the full Kalman filter or all camera-IMU fusion components.', 'What was the full system pipeline from sensor to display?'),
('Why did the tracking system use UDP?', 'For interactive visualization, low latency matters and late packets can be less useful than dropped packets. UDP reduces protocol overhead and avoids waiting for retransmission. The trade-off is that the application must tolerate loss, reordering, and the absence of built-in delivery guarantees.', 'How would you make the visualization robust to lost packets?'),
('What is 6-DoF pose and why are coordinate frames important?', 'A 6-DoF pose contains three-dimensional position and orientation. Every camera, IMU, headset, and visualization frame needs a defined transform and convention. An incorrect extrinsic transform, handedness mismatch, or unit mismatch can produce apparently plausible but wrong motion.', 'How would you compose a camera-to-world transform with an IMU-to-camera transform?'),
('Why use an HMM for activity recognition instead of independent classification?', 'Activity labels are temporally persistent, so an HMM combines per-window observation likelihoods with transition probabilities. That reduces implausible rapid label switching. In the project, Viterbi sequence decoding slightly outperformed posterior MAP decoding and an independent Gaussian baseline on the mixed recording.', 'What assumptions does a first-order HMM make?'),
('What were the main limitations of the HMM activity-recognition experiment?', 'The dataset was small and came from one user. Training sequences were mostly single-activity recordings, so off-diagonal transitions were weakly informed, and the mixed-recording transition labels were approximate. The measured accuracy therefore supports a proof of concept, not broad generalization.', 'What dataset and split would you use for a stronger claim?'),
('Explain the intuition of Wiener filtering for speech enhancement.', 'The Wiener filter estimates the clean signal by balancing signal and noise spectra to minimize mean-square error. Frequencies with a high estimated speech-to-noise ratio pass more strongly, while noise-dominated frequencies are attenuated. Stronger attenuation can reduce noise but also distort speech.', 'Why did increasing the noise scale improve suppression but hurt quality?'),
('Why does an adaptive line enhancer remove a tone while retaining speech?', 'After a suitable delay, a periodic tone remains predictable but broadband speech becomes less correlated with the delayed reference. The adaptive filter learns the predictable component, and subtracting that estimate leaves an enhanced speech signal. The method depends on the delay and correlation assumptions being reasonable.', 'When would an ALE fail or remove desired signal content?'),
('Compare LMS, NLMS, and RLS in one answer.', 'LMS is simple and uses a fixed step size, so it is inexpensive but sensitive to input scaling. NLMS normalizes by input energy, making the step size more stable when amplitude changes. RLS typically converges faster by using an inverse-correlation estimate, but it has higher computation and can be more sensitive to numerical choices.', 'Why does a forgetting factor matter in RLS?'),
('What did you learn from the QPSK project that transfers to estimation?', 'The project combined pulse shaping, matched filtering, training-based synchronization, and phase estimation. The general lesson is that a receiver must align timing and phase before decisions are meaningful. This transfers to sensor systems because calibration and synchronization determine whether later inference sees a coherent measurement.', 'Why is a matched filter optimal in white Gaussian noise for a known signal?'),
('How would you explain a residual and robust loss on a whiteboard?', 'A residual is the difference between what a model predicts and what a measurement reports. Least squares penalizes large residuals quadratically, so an outlier can dominate the estimate. A robust loss such as Huber behaves quadratically near zero but reduces the influence of large residuals.', 'What trade-off does robust weighting introduce?'),
('How do you know an improvement is real?', 'I would define an evaluation metric before looking at results, compare against a relevant baseline, repeat runs when randomness exists, and show variability rather than only the best run. I would also check whether the improvement appears in the failure modes the method was designed to address. A visually nicer trajectory alone is not enough evidence.', 'What could cause a false improvement?'),
('What is the difference between accuracy, latency, and throughput?', 'Accuracy measures correctness or estimation error. Latency measures delay from input to usable output. Throughput measures how much data or how many frames the system processes per unit time. A real-time system can have high throughput but still be unsuitable if its latency is too large.', 'How would you measure end-to-end latency in the VR tracking prototype?'),
('What makes a good research question for your thesis?', 'It should identify a concrete failure or limitation, state what will be measured, and include a credible baseline. For example, I would frame a question around whether a measurement-quality-aware fusion strategy improves robustness in explicitly defined degenerate scenes without unacceptable latency. The answer should be testable rather than a broad claim about making SLAM better.', 'What data and ground truth would you need?'),
('How would your signal-processing background transfer to brain decoding?', 'The common elements are noisy multichannel time series, filtering, spectral or time-frequency features, uncertainty, validation, and classification or sequential inference. I would first learn the modality-specific assumptions and artifact structure rather than assume that methods transfer unchanged. My relevant experience is strongest in adaptive filtering, HMMs, spectral analysis, and signal classification.', 'What differs between accelerometer data and EEG or MEG?'),
('What should you say when an interviewer asks about a result you cannot substantiate?', 'I would state the exact scope of the experiment, explain what was observed, and distinguish that from a general conclusion. If I do not have a repeated benchmark or ground truth, I would say so directly and describe the next experiment needed. That is more credible than presenting an early observation as a validated result.', 'What evidence would upgrade the claim?'),
]
for i, (q, a, f) in enumerate(top, 1): story.append(qa(i, q, a, f))
story.append(PageBreak())

story += section('2. Current LiDAR-Visual-Inertial SLAM', 'The available source is the current CV. Use the following answers as honest, technically grounded preparation. Do not substitute them for project logs, code-level knowledge, or unpublished results.')
slam = [
('What estimator and baseline systems are named in your materials?', 'The CV names FAST-LIO-VF as the system used to investigate challenging and degenerate settings. It also says I compared it with tightly coupled LiDAR-visual methods including FAST-LIVO2. I should describe this as a comparison and investigation, not as proof that one system dominates another without reporting the exact protocol and results.', 'What are the coupling differences between the systems?'),
('Which failures were considered?', 'The documented failure modes are aggressive motion, weak LiDAR geometry, low-texture scenes, visual feature starvation, and perceptual aliasing. They are distinct. For example, weak geometry affects geometric observability, while perceptual aliasing can create incorrect but plausible visual associations.', 'Which diagnostic would you log for each failure?'),
('What does degeneracy-aware sensor weighting try to do?', 'It tries to reduce reliance on a modality or measurement direction when its information is weak, while preserving useful constraints from other measurements. The key question is how measurement quality is estimated and how the weighting changes the covariance or normal equations. A heuristic weight needs ablation and sensitivity testing.', 'Could weighting create inconsistency or overconfidence?'),
('Why use Huber weighting?', 'Huber weighting limits the influence of large residuals that may come from mismatches, dynamic objects, or corrupted observations. It retains least-squares behavior for small residuals, which keeps local efficiency under roughly Gaussian noise. The threshold is a design choice and should reflect residual scale.', 'How would you choose or normalize the threshold?'),
('What are temporal-consistency checks?', 'They examine whether a visual association or update agrees with recent motion and appearance history rather than accepting it from one frame alone. Such checks can reduce isolated bad matches. They can also reject legitimate rapid changes, so the operating conditions matter.', 'How would aggressive motion challenge this check?'),
('Why use deterministic ORB feature extraction in an experiment?', 'Deterministic settings reduce an avoidable source of run-to-run variation. This makes it easier to attribute changes in output to an algorithmic intervention instead of random feature ordering or extraction behavior. Determinism does not replace repeated trials because the rest of the system can still vary.', 'What other sources of nondeterminism remain in ROS pipelines?'),
('What are geometric landmark anchors?', 'They are intended to provide stable geometric references when ordinary visual associations become unreliable. Their value depends on whether the landmarks are correctly associated and sufficiently informative for the weak state directions. The available source says they were investigated, not that they solved every failure case.', 'How would repeated texture or symmetry affect landmark anchoring?'),
('How would you diagnose association failure?', 'I would inspect residual distributions, match counts, track length, reprojection error, innovation statistics, and changes in pose or covariance. I would align those logs with the scene and trajectory to distinguish low feature count from wrong feature matches. Ground truth, when available, helps determine whether a gate caught a real outlier or removed a valid observation.', 'What would a sudden residual spike mean?'),
('What is observability?', 'A state direction is observable when the measurements contain enough independent information to infer it. In practice, it depends on geometry, motion, excitation, sensor model, and prior information. Degeneracy corresponds to weak observability in one or more directions.', 'Can a state be locally observable but poorly conditioned?'),
('How would you use an information matrix to reason about degeneracy?', 'For a linearized least-squares problem, the information matrix summarizes local constraint strength. Small eigenvalues or singular values indicate directions with little information. The associated vectors indicate which combinations of state variables are weakly constrained.', 'Why can thresholds depend on scaling and parameterization?'),
('What experimental result would you trust most?', 'I would trust a result that repeats across controlled trials, uses a pre-defined metric and baseline, and appears in the failure condition the intervention targets. I would also inspect exceptions and failure rate, not only an average. The current sources do not provide a final numerical result, so I would not invent one.', 'Would median error alone be enough?'),
('What are frontend limitations?', 'A frontend can limit available measurements through feature extraction, matching, timing, compute budget, and its own failure detection. Even a well-designed backend estimator cannot recover information that the frontend failed to extract or associated incorrectly. This is why diagnostics must span the full pipeline.', 'How would you isolate frontend versus backend failure?'),
('What would you do if adding visual updates makes performance worse?', 'I would first test time alignment, extrinsics, feature quality, residual normalization, and the update covariance. Then I would compare no-update, gated-update, and robustly weighted-update conditions on the same sequences. A worse result may indicate bad associations, overconfident covariance, or a mismatch between the visual model and scene.', 'What is the smallest experiment that could separate those explanations?'),
('What is the most important limitation you would state?', 'The current work is ongoing, and the available source does not document a final validated recovery method or complete benchmark results. Also, visual support itself can fail in low-texture or ambiguous scenes. The correct claim is that I investigated and evaluated robustness strategies, not that I solved degeneracy in general.', 'What would be required to make a stronger claim?'),
('What could the next month of work focus on?', 'I would choose one well-defined failure mode, establish a reproducible baseline, and run an ablation that measures trajectory error, update acceptance, and runtime. I would also document calibration and synchronization checks. This would produce a narrower but stronger contribution than adding many unvalidated mechanisms.', 'Which failure mode would you prioritize and why?'),
]
for i, (q, a, f) in enumerate(slam, 1): story.append(qa(i, q, a, f))
story.append(PageBreak())

story += section('3. Inside-Out Tracking', 'B.Sc. team project. The final report identifies the personal contribution as low-latency SBC-to-computer communication, real-time 3D head-model rendering, and assistance with image processing.')
tracking = [
('What was the system architecture?', 'The prototype used a Raspberry Pi camera and BNO055 IMU mounted for VR tracking. The system sent information from the SBC to an external computer using Wi-Fi and UDP, then rendered a 3D head model in Python using VTK. The report describes camera-based position tracking with ORB-SLAM3 and IMU support, with a Kalman-filter approach for fusion.', 'Where did each computation run?'),
('What was your contribution?', 'I designed the low-latency wireless link between the SBC and the external computer, implemented real-time rendering of the 3D head model, and assisted with image processing. The report attributes separate IMU and Kalman-filter work to other teammates. I would be clear about that division.', 'How did you test the communication link?'),
('Why use camera and IMU together?', 'A camera can provide environmental information that constrains position, while an IMU provides high-rate rotational and motion measurements. Camera tracking can fail with blur, low texture, or occlusion, and IMU integration drifts. Fusion aims to use complementary strengths.', 'What happens if the camera drops frames?'),
('Why is calibration important?', 'The estimator needs the camera and IMU axes, positions, scales, and timestamps to refer to consistent frames. A small extrinsic or timing error becomes more harmful during fast rotation. Calibration is therefore part of the measurement model, not a cosmetic setup step.', 'How would you validate extrinsics?'),
('Why did UDP suit the design?', 'The display needs fresh pose information quickly. UDP supports a lightweight low-latency link, but the application must handle packet loss and ordering. For pose streaming, a stale reliable packet can be less useful than the newest available one.', 'How would sequence numbers help?'),
('What is the latency budget?', 'The report emphasizes low latency but I should not quote a number unless I can find the measured end-to-end test. The budget includes sensor acquisition, image processing, estimation, serialization, Wi-Fi transport, decoding, and rendering. I would measure the whole chain rather than only network delay.', 'How would you instrument it?'),
('What can cause drift?', 'IMU bias, orientation error, imperfect gravity removal, poor camera tracking, calibration error, and time mismatch can all create drift. Position is especially sensitive because acceleration integrates twice. External visual constraints help only when they are valid.', 'How would you tell bias from coordinate-frame error?'),
('How would you evaluate pose accuracy?', 'I would use a synchronized reference trajectory or a controlled motion setup and report separate position and orientation error over time. I would test static, slow, and aggressive motion conditions. A single qualitative visualization is useful for debugging but not enough for an accuracy claim.', 'What reference system could provide ground truth?'),
('What would you improve?', 'I would add systematic latency instrumentation, packet-loss handling, repeatable accuracy tests, and failure logging for camera tracking. I would also document exact calibration and synchronization procedures. These steps would make the prototype easier to compare and reproduce.', 'Which improvement gives the highest value for effort?'),
]
for i, (q, a, f) in enumerate(tracking, 1): story.append(qa(i, q, a, f))
story.append(PageBreak())

story += section('4. Signal Processing and ML Projects', 'Use these projects to show methodological range. Keep claims linked to the relevant project rather than treating course results as general-purpose systems.')
sp = [
('Why did you use acceleration magnitude in the HMM project?', 'Magnitude reduces sensitivity to how the phone axes are oriented, which is useful when a phone sits in a pocket. The trade-off is that directional information is discarded. The project then used a five-sample moving average and one-second overlapping windows with mean, standard deviation, and range features.', 'What activity distinction might need axis-specific features?'),
('How did Baum-Welch improve the HMM?', 'It alternated Forward-Backward inference with parameter updates for state probabilities, transitions, Gaussian means, and covariances. The report shows training log-likelihood increasing from 2487.54 to 2551.70 and stopping at an improvement threshold of 1e-3. This optimizes model likelihood, not necessarily test accuracy.', 'Why might likelihood increase while generalization worsens?'),
('What comparison did you make in the HMM project?', 'On the mixed recording, Viterbi reached about 85.03 percent accuracy, posterior MAP about 84.43 percent, and an independent Gaussian baseline about 82.63 percent. The temporal model gave a modest improvement. The small, single-user dataset limits conclusions.', 'Why can Viterbi and posterior decoding disagree?'),
('What assumptions underlie the Wiener speech enhancer?', 'The project assumed an additive model of clean speech plus noise, uncorrelated components, and AR models for smooth power spectral estimates. It selected low-energy and high-energy frames from one recording as noise and speech proxies. These are useful approximations, not ground-truth separation.', 'What happens when noise overlaps speech in frequency?'),
('What were the Wiener-filter design choices?', 'The project compared ideal non-causal, finite-length FIR Wiener-Hopf, and causal spectral-factorization designs. It used AR orders 14, an FIR Wiener length of 192, an FFT size of 8192, and truncated non-causal and causal responses. A noise scale of 20 increased suppression of broadband aircraft noise but introduced audible speech distortion.', 'Why is the non-causal filter an offline benchmark?'),
('What is the core ALE assumption?', 'The delayed speech component should be weakly correlated with its delayed copy, while a periodic disturbance remains predictable. The filter uses the delayed noisy signal as reference and estimates the tonal component. If desired speech is also strongly predictable at that delay, the filter can remove part of it.', 'How would you choose the delay experimentally?'),
('Why use NLMS rather than LMS?', 'NLMS divides the update by instantaneous input energy, so its effective step size adapts to amplitude. That reduces sensitivity when speech amplitude changes. It still needs a stable normalized step-size and regularization term.', 'Why not always use RLS?'),
('What is the meaning of the RLS forgetting factor?', 'The forgetting factor weights recent errors more strongly than older ones. A value below one lets the filter track slowly changing statistics, while a value too low increases variance and sensitivity. It is a trade-off between adaptation and stability.', 'How would you tune it?'),
('What did the signal-theory project teach about estimation?', 'It covered Gaussian estimation, bivariate distributions, periodograms, and noisy linear systems, with theory checked against simulations. A second project trained a causal FIR equalizer on a 32-symbol preamble, then decoded a scrambled RGB image. It also injected bit flips to test how recovered-key errors affected image decoding.', 'Why is a preamble useful for equalization?'),
('What did you find in the image-key recovery experiment?', 'The portfolio summary says decoded images remained interpretable up to roughly 3 percent BER and became unusable beyond about 8 percent BER. This is a project-specific robustness observation based on controlled bit-flip injection. It does not describe a general cryptographic security result.', 'Why can a few wrong permutation entries damage an image so strongly?'),
('How does matched filtering help QPSK reception?', 'A matched filter maximizes output SNR for a known pulse shape in white Gaussian noise at the sampling instant. In the project it followed pulse shaping and preceded synchronization and phase estimation. If timing or phase is wrong, a good matched filter alone does not make correct symbol decisions.', 'What creates intersymbol interference?'),
('What did you evaluate in the QPSK project?', 'I simulated a Gray-coded QPSK link with pulse shaping, matched filtering, training-based synchronization, and phase estimation, then compared BER with theory. The useful interview point is the chain of modelling assumptions and where implementation mismatch can enter.', 'Why compare simulated BER with theoretical BER?'),
('How did the image compression project compare DCT and wavelets?', 'It implemented blockwise 8 by 8 DCT and multiscale 5/3 biorthogonal wavelet pipelines, applied uniform mid-tread quantization, and estimated rate using ideal entropy coding. Rate-distortion curves related bitrate to PSNR. The summary reports similar performance at higher rates, with image content affecting results.', 'Why does biorthogonal wavelet MSE behave differently from orthonormal DCT MSE?'),
('What did the video-coding project compare?', 'It compared intra coding, conditional replenishment, and motion-compensated coding on QCIF sequences. The motion-compensated version used 16 by 16 blocks, full-search integer-pel motion vectors in a plus or minus 10 pixel range, and rate-distortion optimization. Motion compensation gave the best rate-distortion performance in the project.', 'When can motion compensation fail?'),
('What did the modulation-classification project do?', 'The EE435 report built a ResNet-based classifier for five analog modulation types from simulated I/Q data and examined effects of SNR and carrier-frequency offset. This shows experience with raw complex-signal representations, synthetic data, classification, and robustness factors. It should not be described as an over-the-air validated system unless such a test is documented.', 'How would you prevent train-test leakage in generated I/Q data?'),
('What did the jitter project measure?', 'The UMRAM report generated jittered sinusoidal signals in MATLAB and analyzed absolute, relative, period, N-period, and cycle-to-cycle jitter. It detected rising zero crossings and used linear interpolation to estimate crossing times more accurately than sample-level detection. This is directly relevant to timing uncertainty and measurement resolution.', 'Why does interpolation reduce quantization error in crossing-time estimates?'),
('How would you transfer these projects to neurotechnology?', 'I would map the shared methods carefully: filtering and artifact suppression, time-frequency features, sequential modelling, validation under noise, and multichannel signal representation. I would not assume the same labels, noise model, stationarity, or ground truth. A first thesis task should establish the biological measurement model and evaluation protocol.', 'What artifact differs most between speech and EEG?'),
]
for i, (q, a, f) in enumerate(sp, 1): story.append(qa(i, q, a, f))
story.append(PageBreak())

story += section('5. Questions About My Own Contribution')
own = [
('How do you separate your work from team work?', 'I name the system first, then state my documented component. For the B.Sc. project, I handled low-latency communication, real-time rendering, and assisted with image processing. I avoid taking ownership of the full fusion pipeline because the report assigns those components across the team.'),
('Which parts were already in the codebase for the SLAM research?', 'The available materials name FAST-LIO-VF and comparisons with FAST-LIVO2, but they do not provide a code-level ownership ledger. I should answer this only from my actual repository history and say clearly which changes were my own. If I cannot verify it, I should not guess.'),
('What result are you most confident about?', 'For the HMM project, I am confident about the reported within-project decoding results and the documented limitations. For the current SLAM work, I am most confident describing the investigated failure modes and experimental pipeline, not a final performance claim.'),
('Which conclusion should you not draw from the HMM experiment?', 'I should not claim that the classifier generalizes to arbitrary users, phone placements, or real-world activity transitions. The study used a small, single-user data collection and approximate transition labels.'),
('What failed or remained limited?', 'In the Wiener project, stronger suppression introduced speech distortion. In SLAM, sparse visual features and ambiguous scenes remain limitations. In the B.Sc. tracking system, a prototype demonstration does not replace a synchronized quantitative pose evaluation.'),
('What would you do next?', 'I would narrow the next experiment to one failure mode, establish a baseline and ground truth, repeat trials, and report accuracy, robustness, and runtime together. This is more useful than adding many changes without attribution.')]
for i, (q, a) in enumerate(own, 1): story.append(qa(i, q, a))

story += section('6. Rapid-Fire Fundamentals')
rapid = [
('What is an innovation?', 'The difference between a measurement and its predicted value.'),
('What is a covariance?', 'A matrix describing uncertainty and correlation between random variables.'),
('What is an information matrix?', 'Roughly the inverse of covariance when the matrix is invertible; it represents constraint strength.'),
('What is observability?', 'Whether measurements contain enough information to infer a state direction.'),
('Why do small eigenvalues matter?', 'They indicate weakly constrained directions in a local information matrix.'),
('Why use a robust loss?', 'To reduce the influence of outliers or mismatched measurements.'),
('What causes IMU drift?', 'Bias, noise, gravity-projection error, and repeated integration.'),
('What is an extrinsic calibration?', 'The fixed pose transform between sensor coordinate frames.'),
('What is time synchronization?', 'Mapping measurements from different sensors to the same physical time.'),
('What is a matched filter?', 'A filter matched to a known signal shape that maximizes SNR under white Gaussian noise.'),
('What is a PSD?', 'Power spectral density, which describes signal power across frequency.'),
('What does Wiener filtering optimize?', 'Mean-square estimation error under its signal and noise assumptions.'),
('What does LMS minimize?', 'An instantaneous approximation to squared prediction error.'),
('How does NLMS differ from LMS?', 'It normalizes the update by input energy.'),
('Why is RLS faster?', 'It uses an inverse-correlation estimate to make a more informed update.'),
('What does Viterbi return?', 'The most likely full hidden-state sequence.'),
('What does Forward-Backward return?', 'Posterior state probabilities using all observations in a sequence.'),
('What is Baum-Welch?', 'An EM algorithm that estimates HMM parameters from sequences.'),
('What is overfitting?', 'Learning dataset-specific patterns that do not generalize to new data.'),
('What is an ablation?', 'A controlled comparison that removes or adds one component at a time.')]
for i, (q, a) in enumerate(rapid, 1): story.append(qa(i, q, a))
story.append(PageBreak())

story += section('7. Dangerous Questions', 'These are situations where an overconfident answer can damage credibility.')
danger = [
('Did you solve LiDAR degeneracy?', 'No. The available source supports that I investigated and evaluated degeneracy-aware strategies and failure modes. The work is ongoing, and I would not claim a universally validated solution.'),
('Did you implement the entire B.Sc. tracking system?', 'No. It was a team project. My documented work was the low-latency communication link, real-time 3D rendering, and assistance with image processing.'),
('Did the HMM achieve 85 percent accuracy in general?', 'No. It achieved about 85.03 percent on the specific mixed recording in a small single-user project. It is evidence for that experiment, not a general deployment result.'),
('Did the Wiener filter recover clean speech?', 'No. It estimated enhanced speech under additive-noise and AR-model assumptions. Strong suppression also introduced audible distortion.'),
('Does visual information always repair LiDAR failure?', 'No. Visual features can fail in low-texture, blurred, occluded, or ambiguous scenes. Fusion only helps when the added measurements are valid and informative.'),
('Did you run a full real-world over-the-air modulation test?', 'I would not claim that unless I can show the record. The report describes simulated I/Q data and examines robustness factors such as SNR and carrier-frequency offset.'),
('Did you prove motion compensation is universally best?', 'No. It had the best rate-distortion performance in the evaluated project configuration and QCIF sequences. Performance depends on motion, search range, model, and rate accounting.'),
('Can you quote an end-to-end VR latency?', 'Only if I can locate the recorded measurement and its method. The report emphasizes low latency, but I should not invent a number.'),
('Can you describe exact SLAM code changes?', 'Only from my actual code history and experiment notes. The portfolio source provides high-level CV claims, not a complete code-level attribution.'),
('Can your coursework directly decode brain signals?', 'The methods transfer conceptually, but neural signals have different artifacts, labels, data constraints, and validation requirements. I would start by learning the modality and baseline pipeline.')]
for i, (q, a) in enumerate(danger, 1): story.append(qa(i, q, a))

story += section('10 Questions I Should Practice Aloud First')
practice = [
'What is the core failure mode you are studying in LiDAR-Visual-Inertial SLAM?',
'Why can LiDAR degeneracy occur, and how could visual and inertial measurements help?',
'What exactly did you implement and analyze in the ongoing SLAM work?',
'How would you design a fair ablation study for a robustness mechanism?',
'What is the most important limitation of sparse visual support?',
'Describe the B.Sc. VR tracking system and your own contribution.',
'Why does IMU-only position estimation drift?',
'Why did an HMM suit accelerometer-based activity recognition?',
'Compare LMS, NLMS, and RLS for adaptive filtering.',
'How would you connect your signal-processing background to brain decoding without overstating the transfer?']
for i, item in enumerate(practice, 1):
    story.append(p(f'{i}. {item}', 'Question'))

story += [Spacer(1, 12), p('Repository sources reviewed', 'H2Custom'), p('FinalReport.pdf; EQ2341 Final Project Report; EQ2401 Project 1 and 2 presentations; EQ1220 Projects 1 and 2; EQ2310 Project 1; EQ2321 Project presentations; EQ2330 Project reports; EE435 report; UMRAM jitter report; current CV; and project detail pages. The current SLAM portion is limited to the CV because no dedicated SLAM code, report, or experiment log was present in the available repository.', 'Small')]

doc = SimpleDocTemplate(str(OUT), pagesize=A4, rightMargin=1.7*cm, leftMargin=1.7*cm, topMargin=1.7*cm, bottomMargin=1.8*cm, title='Technical Interview Preparation')
doc.build(story, onFirstPage=footer, onLaterPages=footer)
print(OUT)
