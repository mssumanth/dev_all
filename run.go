package main

import (
	"context"

	"cloud.google.com/go/translate"
	"google.golang.org/grpc"
	"google.golang.org/protobuf/proto"
)

type LanguageDetection struct {
	Client translate.Client
}

func (s *LanguageDetection) Detect(ctx context.Context, req *translation.DetectLanguageRequest, opts ...grpc.CallOption) (*translation.DetectLanguageResponse, error) {
	return s.TranslationClient.DetectLanguage(ctx, req, opts...)
}

func DetectLanguage(project string, content string) ([]string, error) {
	ctx := context.Background()
	languageDetection := &LanguageDetection{
		Client: translation.NewTranslationClient(ctx),
	}
	req := &translation.DetectLanguageRequest{
		GcsContent: &translation.GcsContent{
			Uri: proto.String(content),
		},
	}
	resp, err := languageDetection.Detect(ctx, req)
	if err != nil {
		return nil, err
	}
	languages := make([]string, len(resp.Detection))
	for i, det := range resp.Detection {
		languages[i] = det.Language
	}
	return languages, nil
}
